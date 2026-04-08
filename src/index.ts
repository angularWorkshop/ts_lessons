export interface CompilerDiagnostics {
  files: number;
  lines: number;
  identifiers: number;
  symbols: number;
  types: number;
  instantiations: number;
  memoryUsedMb: number;
  parseTimeMs: number;
  bindTimeMs: number;
  checkTimeMs: number;
  totalTimeMs: number;
}

export interface BuildComparison {
  savedMs: number;
  faster: boolean;
  improvementPercent: number;
}

export interface CompilerConfigProfile {
  incremental?: boolean;
  tsBuildInfoFile?: string;
  include?: string[];
  exclude?: string[];
}

const reportPatterns = {
  files: /^Files:\s+(\d+)/m,
  lines: /^Lines of Library:\s+(\d+)/m,
  identifiers: /^Identifiers:\s+(\d+)/m,
  symbols: /^Symbols:\s+(\d+)/m,
  types: /^Types:\s+(\d+)/m,
  instantiations: /^Instantiations:\s+(\d+)/m,
  memoryUsedMb: /^Memory used:\s+(\d+)K/m,
  parseTimeMs: /^Parse time:\s+([\d.]+)/m,
  bindTimeMs: /^Bind time:\s+([\d.]+)/m,
  checkTimeMs: /^Check time:\s+([\d.]+)/m,
  totalTimeMs: /^Total time:\s+([\d.]+)/m,
} satisfies Record<keyof CompilerDiagnostics, RegExp>;

function readMetric(report: string, pattern: RegExp): number {
  const match = report.match(pattern);

  if (!match) {
    return 0;
  }

  return Number(match[1]);
}

export function parseExtendedDiagnostics(report: string): CompilerDiagnostics {
  return {
    files: readMetric(report, reportPatterns.files),
    lines: readMetric(report, reportPatterns.lines),
    identifiers: readMetric(report, reportPatterns.identifiers),
    symbols: readMetric(report, reportPatterns.symbols),
    types: readMetric(report, reportPatterns.types),
    instantiations: readMetric(report, reportPatterns.instantiations),
    memoryUsedMb: readMetric(report, reportPatterns.memoryUsedMb),
    parseTimeMs: readMetric(report, reportPatterns.parseTimeMs),
    bindTimeMs: readMetric(report, reportPatterns.bindTimeMs),
    checkTimeMs: readMetric(report, reportPatterns.checkTimeMs),
    totalTimeMs: readMetric(report, reportPatterns.totalTimeMs),
  };
}

export function compareBuildRuns(
  coldBuild: CompilerDiagnostics,
  repeatedBuild: CompilerDiagnostics,
): BuildComparison {
  const savedMs = coldBuild.totalTimeMs - repeatedBuild.totalTimeMs;
  const improvementPercent = coldBuild.totalTimeMs === 0 ? 0 : (savedMs / coldBuild.totalTimeMs) * 100;

  return {
    savedMs,
    faster: savedMs >= 0,
    improvementPercent,
  };
}

export function optimizeCompilerProfile(config: CompilerConfigProfile): CompilerConfigProfile {
  return {
    ...config,
    incremental: false,
    include: config.include ?? ['src/**/*'],
    exclude: config.exclude ?? ['dist'],
  };
}
