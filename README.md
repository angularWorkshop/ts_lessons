# Exercise 24.1: `@Log` and `@Memoize`

## Goal

Practice classic TypeScript method decorators by implementing logging and per-instance memoization.

## Task

1. Implement `@Log()` so it records the method name together with serialized arguments.
2. Implement `@Memoize()` so repeated calls with the same arguments reuse the cached result.
3. Apply both decorators to the provided `PricingService` class.
4. Make all tests pass without changing the tests.

## Constraints

- use decorator syntax, not wrapper calls in plain functions
- preserve the original method return types
- memoization must be isolated per class instance
- do not use `any`

## Run locally

```bash
npm install
npm run check
```
