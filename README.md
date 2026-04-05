# Topic 3.2 — never and void

This branch contains the starter for the second exercise in Topic 3.

## Goal

Practice the difference between `never` and `void` in real functions.

## Task

Finish `src/index.ts`.

You need to:

1. implement `throwError(message: string): never`
2. implement `logMessage(message: string): void`
3. leave a short explanation in the source about the difference between `void` and `undefined`

## Requirements

- `throwError` must always throw
- `logMessage` must not return a useful value
- the source file must mention both `void` and `undefined`
- do not use `any`

## Run locally

```bash
npm install
npm run check
npm run build
```
