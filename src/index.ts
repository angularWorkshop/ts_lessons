export type User = {
  name: string;
  age: number;
};

export function sumPrices(prices) {
  return prices.reduce((total, price) => total + price, 0);
}

export function formatUser(user) {
  return `${user.name} (${user.age})`;
}

export function isAdult(age) {
  return age >= 18;
}
