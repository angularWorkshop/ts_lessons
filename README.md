# Exercise 17.1: Typing a JS Library

## Goal

Write a `.d.ts` declaration file for a plain JavaScript library that has no built-in types.

## Task

1. Examine the untyped JS module in `src/math-utils.js`.
2. Create `src/math-utils.d.ts` that declares all exported functions and types.
3. Use the declarations in `src/index.ts` to call the library with full type safety.
4. Make all tests pass.

## Constraints

- do not modify `src/math-utils.js`
- do not use `any` in your declarations
- all function signatures must match the actual runtime behavior

## Run locally

```bash
npm install
npm run check
```
