import type { Readable } from 'node:stream';

export function parseJson(raw: string): unknown {
  return JSON.parse(raw) as unknown;
}

export function getLength(value: string | undefined): number {
  return value?.length ?? 0;
}

export function double(n: number): number {
  return n * 2;
}

export function fetchData(url: string): Promise<string> {
  return Promise.resolve(`data from ${url}`);
}

export function loadData(): void {
  void fetchData('https://api.example.com/data');
}

export function describeStream(stream: Readable): string {
  return stream.readable ? 'readable' : 'not readable';
}

export function sum(values: readonly number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
