import {
  compareBuildRuns,
  optimizeCompilerProfile,
  parseExtendedDiagnostics,
} from '../../src/index';

const coldBuildReport = `Files:                         121
Lines of Library:            40212
Identifiers:                 61234
Symbols:                     48210
Types:                       22654
Instantiations:               3450
Memory used:                87542K
Parse time:                  0.82
Bind time:                   0.39
Check time:                  1.74
Total time:                  3.28`;

const repeatedBuildReport = `Files:                         121
Lines of Library:            40212
Identifiers:                 61234
Symbols:                     48210
Types:                       22654
Instantiations:               3450
Memory used:                61200K
Parse time:                  0.24
Bind time:                   0.08
Check time:                  0.61
Total time:                  1.17`;

describe('parseExtendedDiagnostics', () => {
  it('extracts numeric metrics from a diagnostics report', () => {
    expect(parseExtendedDiagnostics(coldBuildReport)).toEqual({
      files: 121,
      lines: 40212,
      identifiers: 61234,
      symbols: 48210,
      types: 22654,
      instantiations: 3450,
      memoryUsedMb: 87.54,
      parseTimeMs: 820,
      bindTimeMs: 390,
      checkTimeMs: 1740,
      totalTimeMs: 3280,
    });
  });
});

describe('compareBuildRuns', () => {
  it('reports repeated build improvement', () => {
    const cold = parseExtendedDiagnostics(coldBuildReport);
    const repeated = parseExtendedDiagnostics(repeatedBuildReport);

    expect(compareBuildRuns(cold, repeated)).toEqual({
      savedMs: 2110,
      faster: true,
      improvementPercent: 64.33,
    });
  });
});

describe('optimizeCompilerProfile', () => {
  it('enables incremental compilation and narrows include/exclude', () => {
    expect(
      optimizeCompilerProfile({
        include: ['src/**/*.ts', 'tests/**/*.ts', 'scripts/**/*.ts'],
      }),
    ).toEqual({
      incremental: true,
      tsBuildInfoFile: '.tsbuildinfo',
      include: ['src/**/*.ts', 'tests/**/*.ts'],
      exclude: ['dist', 'coverage', 'node_modules'],
    });
  });
});
