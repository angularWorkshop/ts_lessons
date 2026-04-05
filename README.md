# Exercise 23.1: Result type

## Goal

Practice type-safe error handling with `Result<T, E>` and replace thrown JSON parsing errors with an explicit typed contract.

## Task

1. Implement `ok(value)` and `err(error)` factories.
2. Implement `map`, `mapErr`, and `match` on `Result<T, E>`.
3. Rewrite `parseJsonResult` so it returns `Result` instead of throwing.
4. Keep the consumer chain free from `try/catch`.
5. Make all tests pass.

## Constraints

- do not use `any`
- `map` must transform only successful values
- `mapErr` must transform only errors
- invalid JSON must become a typed error value

## Run locally

```bash
npm install
npm run check
```
