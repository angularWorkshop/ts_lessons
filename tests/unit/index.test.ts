import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { buildCourseLabel, getFirstTag } from '../../src/index';

type TsConfig = {
  compilerOptions?: {
    strict?: boolean;
    noUncheckedIndexedAccess?: boolean;
    rootDir?: string;
    outDir?: string;
  };
  include?: string[];
};

function loadConfig(): TsConfig {
  return JSON.parse(readFileSync(new URL('../../tsconfig.json', import.meta.url), 'utf8')) as TsConfig;
}

function normalizePath(value: string | undefined): string | undefined {
  return value?.replace(/\\/g, '/');
}

describe('project tsconfig exercise', () => {
  afterEach(() => {
    rmSync(new URL('../../dist', import.meta.url), { recursive: true, force: true });
    rmSync(new URL('../../build', import.meta.url), { recursive: true, force: true });
  });

  it('keeps the runtime behavior intact', () => {
    expect(
      buildCourseLabel({
        title: 'TypeScript',
        lessonCount: 29,
        tags: ['types', 'tooling'],
      })
    ).toBe('TypeScript (29 lessons)');

    expect(
      getFirstTag({
        title: 'TypeScript',
        lessonCount: 29,
        tags: ['types', 'tooling'],
      })
    ).toBe('types');
  });

  it('uses the expected strict compiler options', () => {
    const config: TsConfig = loadConfig();

    expect(config.compilerOptions?.strict).toBe(true);
    expect(config.compilerOptions?.noUncheckedIndexedAccess).toBe(true);
    expect(normalizePath(config.compilerOptions?.rootDir)).toBe('./src');
    expect(normalizePath(config.compilerOptions?.outDir)).toBe('./dist');
    expect(config.include).toEqual(['src/**/*.ts']);
  });

  it('compiles the source files into dist', () => {
    rmSync(new URL('../../dist', import.meta.url), { recursive: true, force: true });
    rmSync(new URL('../../build', import.meta.url), { recursive: true, force: true });

    execFileSync(process.execPath, ['./node_modules/typescript/bin/tsc', '--project', 'tsconfig.json', '--pretty', 'false'], {
      cwd: new URL('../..', import.meta.url),
      stdio: 'pipe',
    });

    expect(existsSync(new URL('../../dist/index.js', import.meta.url))).toBe(true);
  });
});
