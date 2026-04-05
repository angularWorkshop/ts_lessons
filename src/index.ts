// TODO: add a phantom brand marker so each currency becomes distinct.
export type Brand<T, Tag extends string> = T;

export type EUR = Brand<number, 'EUR'>;
export type USD = Brand<number, 'USD'>;
export type RUB = Brand<number, 'RUB'>;

export function eur(amount: number): EUR {
  return amount as EUR;
}

export function usd(amount: number): USD {
  return amount as USD;
}

export function rub(amount: number): RUB {
  return amount as RUB;
}

export function convertEurToUsd(amount: EUR, rate: number): USD {
  return usd(Number((amount * rate).toFixed(2)));
}

export function addUsd(left: USD, right: USD): USD {
  return usd(left + right);
}

export function formatMoney(amount: EUR | USD | RUB, currency: 'EUR' | 'USD' | 'RUB'): string {
  return `${currency} ${amount.toFixed(2)}`;
}
