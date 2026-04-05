# Topic 1.2 — Type Legacy JS Helpers

This branch contains the starter for the second exercise in Topic 1.

## Goal

Take a small JavaScript-style utility file and turn it into proper TypeScript without changing its runtime behavior.

## Task

Review `src/index.ts`. The functions already work at runtime, but they still look like old JavaScript.

You need to add types for:

1. `sumPrices`
2. `formatUser`
3. `isAdult`

## Requirements

- `sumPrices` must accept a readonly array of numbers and return a number
- `formatUser` must accept a `User` object and return a string
- `isAdult` must accept a number and return a boolean
- do not change the current runtime behavior
- do not use `any`

## Run locally

```bash
npm install
npm run check
npm run build
```
