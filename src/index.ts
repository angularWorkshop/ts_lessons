export type User = {
  name: string;
  age: number;
};

export function sumPrices(prices: readonly number[]): number {
  return prices.reduce((total: number, price: number) => total + price, 0);
}

export function formatUser(user: User): string {
  return `${user.name} (${user.age})`;
}

export function isAdult(age: number): boolean {
  return age >= 18;
}
