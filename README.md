# Exercise 16.1: Config with satisfies

## Goal

Practice the `satisfies` operator and keep literal types narrow without losing structural validation.

## Task

1. Define an app config contract.
2. Create a config object that preserves literal values.
3. Validate it against the contract with `satisfies`.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- preserve literal values instead of widening them to `string`

## Run locally

```bash
npm install
npm run check
```
