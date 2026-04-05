export type MyReturnType<T extends (...args: never[]) => unknown> = T extends (
  ...args: never[]
) => infer ReturnValue
  ? ReturnValue
  : never;

export type MyParameters<T extends (...args: never[]) => unknown> = T extends (
  ...args: infer Parameters
) => unknown
  ? Parameters
  : never;

export function formatUser(name: string, age: number): string {
  return `${name} (${age})`;
}

export function sumPrices(...prices: number[]): number {
  return prices.reduce((total: number, price: number) => total + price, 0);
}
