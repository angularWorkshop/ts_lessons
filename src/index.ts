export function add(first: string | number, second: string | number): string | number {
  return `${first}${second}`;
}

export function sumAll(...values: (string | number)[]): number {
  return values.length;
}
