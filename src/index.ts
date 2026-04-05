export function add(first: number, second: number): number;
export function add(first: string, second: string): string;
export function add(first: string | number, second: string | number): string | number {
  if (typeof first === 'number' && typeof second === 'number') {
    return first + second;
  }

  return `${first}${second}`;
}

export function sumAll(...values: number[]): number {
  return values.reduce((total: number, value: number) => total + value, 0);
}
