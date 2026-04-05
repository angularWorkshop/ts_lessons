export type MyReturnType<T> = unknown;

export type MyParameters<T> = unknown[];

export function formatUser(name: string, age: number): string {
  return `${name} (${age})`;
}

export function sumPrices(...prices: number[]): number {
  return prices.reduce((total: number, price: number) => total + price, 0);
}
