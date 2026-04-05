// TODO: Replace every `any` with proper, specific types.
// TODO: Define the Stats interface with actual fields.
//
// Look at math-utils.js for the real signatures:
//   add(a, b)          → number
//   multiply(a, b)     → number
//   clamp(value, min, max) → number
//   range(start, end, step?) → number[]
//   createStats(values) → { min, max, mean, count }

export interface Stats {
  // TODO: replace the index signature with concrete fields
  [key: string]: any;
}

export function add(a: any, b: any): any;
export function multiply(a: any, b: any): any;
export function clamp(value: any, min: any, max: any): any;
export function range(start: any, end: any, step?: any): any;
export function createStats(values: any): any;
