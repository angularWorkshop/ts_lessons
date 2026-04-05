# Exercise 18.1: Strict Mode Migration

## Goal

Enable TypeScript strict flags step by step and fix every error that surfaces.

## Task

1. Open `tsconfig.json` — currently `strict` is `false` and extra flags are disabled.
2. Enable `strict: true`, then `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`.
3. Fix every type error that appears in `src/index.ts`.
4. Make all tests pass.

## What to fix

- `formatUserName` — add parameter type
- `getUserById` — handle missing user (return `'Unknown'`)
- `getFirstElement` — adjust return type for empty arrays
- `ApiClient` — initialize `baseUrl` via constructor
- `PrefixLogger.log` — add `override`
- `createConfig` — stop assigning `undefined` to optional property

## Run locally

```bash
npm install
npm run check
```
