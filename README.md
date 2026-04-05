# Exercise 10.3: Typed fetch

## Goal

Practice generic async functions and combine them with type guards for safe response handling.

## Task

1. Implement `fetchData<T>`.
2. Return `Promise<T>` without using `any`.
3. Validate the fetched payload through a type guard.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- throw an error when the payload does not match the provided guard

## Run locally

```bash
npm install
npm run check
```
