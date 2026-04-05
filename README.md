# Exercise 22.1: DeepReadonly

## Goal

Practice recursive conditional and mapped types by implementing a deep readonly utility that works with nested objects, arrays, and functions.

## Task

1. Implement `DeepReadonly<T>`.
2. Make nested object properties readonly.
3. Make arrays readonly while keeping their item types recursively readonly.
4. Leave function types unchanged.
5. Make all tests pass.

## Constraints

- do not use `any`
- functions must stay callable
- treat arrays recursively, not just the top-level container

## Run locally

```bash
npm install
npm run check
```
