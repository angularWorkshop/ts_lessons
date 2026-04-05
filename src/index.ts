// ---- Deliberate lint issues for the exercise ----

// Issue 1: explicit any (no-explicit-any)
export function parseJson(raw: string): any {
  return JSON.parse(raw);
}

// Issue 2: unused variable (no-unused-vars)
const DEFAULT_TIMEOUT = 5000;

// Issue 3: non-null assertion (no-non-null-assertion)
export function getLength(value: string | undefined): number {
  return value!.length;
}

// Issue 4: unnecessary type assertion (no-unnecessary-type-assertion)
export function double(n: number): number {
  return (n as number) * 2;
}

// Issue 5: floating promise (no-floating-promises — type-aware rule)
export async function fetchData(url: string): Promise<string> {
  return `data from ${url}`;
}

export function loadData(): void {
  fetchData('https://api.example.com/data');
}

// Issue 6: consistent-type-imports — value import used only as type
import { type Readable } from 'node:stream';

export function describeStream(stream: Readable): string {
  return stream.readable ? 'readable' : 'not readable';
}

// ---- Clean functions (no issues) ----

export function sum(values: readonly number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
