export type UnwrapPromise<T> = T extends Promise<infer Value> ? UnwrapPromise<Value> : T;

export async function resolveValue<T>(value: T): Promise<UnwrapPromise<T>> {
  return (await value) as UnwrapPromise<T>;
}
