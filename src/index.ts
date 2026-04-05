export type MatchHandlers<T, E, R> = {
  ok: (value: T) => R;
  err: (error: E) => R;
};

export interface Result<T, E> {
  readonly kind: 'ok' | 'err';
  map<U>(fn: (value: T) => U): Result<U, E>;
  mapErr<F>(fn: (error: E) => F): Result<T, F>;
  match<R>(handlers: MatchHandlers<T, E, R>): R;
}

export interface JsonUser {
  id: string;
  name: string;
}

export function ok<T>(value: T): Result<T, never> {
  return {
    kind: 'ok',
    map: () => ok(value) as Result<unknown, never>,
    mapErr: () => ok(value),
    match: (handlers) => handlers.ok(value),
  } as Result<T, never>;
}

export function err<E>(error: E): Result<never, E> {
  return {
    kind: 'err',
    map: () => err(error),
    mapErr: () => err(error) as Result<never, unknown>,
    match: (handlers) => handlers.err(error),
  } as Result<never, E>;
}

export function parseJsonResult(raw: string): Result<unknown, string> {
  return ok(JSON.parse(raw));
}

export function getUserNameUppercase(raw: string): Result<string, string> {
  return parseJsonResult(raw)
    .map((value) => value as JsonUser)
    .map((user) => user.name.toUpperCase());
}
