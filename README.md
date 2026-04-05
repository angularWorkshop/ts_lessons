# Exercise 11.1: UnwrapPromise

## Goal

Practice conditional types, `infer`, and recursive type unwrapping for nested promises.

## Task

1. Implement `UnwrapPromise<T>` without using the built-in `Awaited`.
2. Make it recursively unwrap nested `Promise` values.
3. Keep non-promise types unchanged.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- the utility must work for `Promise<Promise<string>>`

## Run locally

```bash
npm install
npm run check
```
