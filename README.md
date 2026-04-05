# Topic 3.2 — never and void

This branch contains the completed solution for the second exercise in Topic 3.

## Goal

Practice the difference between `never` and `void` in real functions.

## Task

The final solution does the following:

1. implement `throwError(message: string): never`
2. implement `logMessage(message: string): void`
3. leave a short explanation in the source about the difference between `void` and `undefined`

## Requirements

- `throwError` always throws
- `logMessage` does not return a useful value
- the source file mentions both `void` and `undefined`
- do not use `any`

## Run locally

```bash
npm install
npm run check
npm run build
```
