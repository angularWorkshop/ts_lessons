export type UnwrapPromise<T> = T;

export async function resolveValue<T>(value: T): Promise<T> {
  return value;
}
