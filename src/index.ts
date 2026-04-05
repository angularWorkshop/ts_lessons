export type Predicate<T> = (value: unknown) => boolean;

export function mapValues(items: unknown[], transform: (value: unknown) => unknown): unknown[] {
  return items.map(transform);
}

export function filterValues(items: unknown[], predicate: Predicate<unknown>): unknown[] {
  return items.filter(predicate);
}
