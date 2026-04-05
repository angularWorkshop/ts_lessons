# Exercise 21.2: Branded currencies

## Goal

Practice branded numeric types so that money values in different currencies cannot be mixed accidentally.

## Task

1. Implement branded types `EUR`, `USD`, and `RUB`.
2. Make the currency factory helpers return the correct brands.
3. Keep `convertEurToUsd` and `addUsd` properly typed.
4. Ensure incompatible currency values cannot be passed where a different brand is required.
5. Make all tests pass.

## Constraints

- keep runtime values as plain numbers
- do not use `any`
- cross-currency operations must require an explicit conversion step

## Run locally

```bash
npm install
npm run check
```
