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
    map: <U>(fn: (currentValue: T) => U) => ok(fn(value)),
    mapErr: () => ok(value),
    match: (handlers) => handlers.ok(value),
  };
}

export function err<E>(error: E): Result<never, E> {
  return {
    kind: 'err',
    map: () => err(error),
    mapErr: <F>(fn: (currentError: E) => F) => err(fn(error)),
    match: (handlers) => handlers.err(error),
  };
}

export function parseJsonResult(raw: string): Result<unknown, string> {
  try {
    return ok(JSON.parse(raw));
  } catch {
    return err('Invalid JSON');
  }
}

export function getUserNameUppercase(raw: string): Result<string, string> {
  return parseJsonResult(raw)
    .map((value) => value as JsonUser)
    .map((user) => user.name.toUpperCase());
}
