# Exercise 27.1: migrate a JS module to TypeScript

## Goal

Practice incremental migration of a small JavaScript module into TypeScript while preserving behavior and tightening the public API.

## Task

1. Migrate the module in `src/legacy/` from `.js` files to `.ts` files.
2. Replace loose JavaScript inference with explicit TypeScript types.
3. Remove broad parameter acceptance so invalid calls fail at compile time.
4. Keep the runtime behavior intact.
5. Make all tests pass.

## Constraints

- do not use `any`
- preserve the existing module behavior
- finish with a type-safe public API
- the migrated module should still be split into small focused files

## Run locally

```bash
npm install
npm run check
```
