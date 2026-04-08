import { expectTypeOf } from 'vitest';
import {
  compareBuildRuns,
  optimizeCompilerProfile,
  parseExtendedDiagnostics,
  type BuildComparison,
  type CompilerConfigProfile,
  type CompilerDiagnostics,
} from '../../src/index';

describe('compiler diagnostics typing', () => {
  it('returns structured diagnostics and comparison shapes', () => {
    const diagnostics = parseExtendedDiagnostics('Files: 1\nTotal time: 0.01');
    const comparison = compareBuildRuns(
      {
        files: 1,
        lines: 1,
        identifiers: 1,
        symbols: 1,
        types: 1,
        instantiations: 1,
        memoryUsedMb: 1,
        parseTimeMs: 1,
        bindTimeMs: 1,
        checkTimeMs: 1,
        totalTimeMs: 2,
      },
      {
        files: 1,
        lines: 1,
        identifiers: 1,
        symbols: 1,
        types: 1,
        instantiations: 1,
        memoryUsedMb: 1,
        parseTimeMs: 1,
        bindTimeMs: 1,
        checkTimeMs: 1,
        totalTimeMs: 1,
      },
    );
    const optimized = optimizeCompilerProfile({});

    expectTypeOf(diagnostics).toEqualTypeOf<CompilerDiagnostics>();
    expectTypeOf(comparison).toEqualTypeOf<BuildComparison>();
    expectTypeOf(optimized).toEqualTypeOf<CompilerConfigProfile>();
  });
});
