import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { err, isErr, isOk, mapResult, ok, withDefault } from '../../src/index';

describe('mini library runtime', () => {
  it('maps only the successful result branch', () => {
    expect(mapResult(ok(21), (value) => value * 2)).toEqual({
      ok: true,
      value: 42,
    });

    expect(mapResult(err('offline'), (value: number) => value * 2)).toEqual({
      ok: false,
      error: 'offline',
    });
  });

  it('narrows and unwraps result values', () => {
    const success = ok({ id: 'task-1' });
    const failure = err('missing');

    expect(isOk(success)).toBe(true);
    expect(isErr(failure)).toBe(true);
    expect(withDefault(success, { id: 'fallback' })).toEqual({ id: 'task-1' });
    expect(withDefault(failure, { id: 'fallback' })).toEqual({ id: 'fallback' });
  });
});

describe('package publishing manifest', () => {
  it('defines import, require and types entrypoints for the package root', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
    ) as {
      exports?: {
        '.': {
          import?: string;
          require?: string;
          types?: string;
        };
      };
    };

    expect(packageJson.exports?.['.']).toEqual({
      types: './dist/index.d.ts',
      import: './dist/index.js',
      require: './dist/index.cjs',
    });
  });

  it('runs checks and build automatically before pack', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
    ) as {
      scripts?: {
        prepack?: string;
      };
    };

    expect(packageJson.scripts?.prepack).toBe('npm run check && npm run build');
  });
});
