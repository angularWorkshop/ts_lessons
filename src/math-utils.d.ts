export interface Stats {
  min: number;
  max: number;
  mean: number;
  count: number;
}

export function add(a: number, b: number): number;
export function multiply(a: number, b: number): number;
export function clamp(value: number, min: number, max: number): number;
export function range(start: number, end: number, step?: number): number[];
export function createStats(values: number[]): Stats;
