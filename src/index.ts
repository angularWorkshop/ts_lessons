export type Predicate<T> = (value: T) => boolean;

export function mapValues<T, U>(items: readonly T[], transform: (value: T, index: number) => U): U[] {
  return items.map((value: T, index: number) => transform(value, index));
}

export function filterValues<T>(items: readonly T[], predicate: Predicate<T>): T[] {
  return items.filter((value: T) => predicate(value));
}
