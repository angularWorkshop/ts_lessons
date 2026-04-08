/**
 * Adds a nominal marker to a primitive or structural type.
 */
export type Brand<T, Name extends string> = T & { readonly __brand: Name };

/**
 * Recursively marks object properties as readonly while leaving functions intact.
 */
export type DeepReadonly<T> = T extends (...args: never[]) => unknown
  ? T
  : T extends readonly unknown[]
    ? { readonly [Key in keyof T]: DeepReadonly<T[Key]> }
    : T extends object
      ? { readonly [Key in keyof T]: DeepReadonly<T[Key]> }
      : T;

/**
 * Successful result payload.
 */
export interface Ok<T> {
  readonly ok: true;
  readonly value: T;
}

/**
 * Failed result payload.
 */
export interface Err<E> {
  readonly ok: false;
  readonly error: E;
}

/**
 * A discriminated union for success and error branches.
 */
export type Result<T, E> = Ok<T> | Err<E>;

/**
 * Creates a branded value without changing its runtime representation.
 */
export function createBrand<T extends string, Name extends string>(value: T): Brand<T, Name> {
  return value as Brand<T, Name>;
}

/**
 * Wraps a successful value.
 */
export function ok<T>(value: T): Ok<T> {
  return { ok: true, value };
}

/**
 * Wraps a failure value.
 */
export function err<E>(error: E): Err<E> {
  return { ok: false, error };
}

/**
 * Narrows a result to the successful branch.
 */
export function isOk<T, E>(result: Result<T, E>): result is Ok<T> {
  return result.ok;
}

/**
 * Narrows a result to the failed branch.
 */
export function isErr<T, E>(result: Result<T, E>): result is Err<E> {
  return !result.ok;
}

/**
 * Maps the success branch and leaves errors untouched.
 */
export function mapResult<T, E, Next>(
  result: Result<T, E>,
  transform: (value: T) => Next,
): Result<Next, E> {
  return isOk(result) ? ok(transform(result.value)) : result;
}

/**
 * Unwraps a result with a fallback for the error branch.
 */
export function withDefault<T, E>(result: Result<T, E>, fallback: T): T {
  return isOk(result) ? result.value : fallback;
}
