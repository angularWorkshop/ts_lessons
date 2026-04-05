# Exercise 17.1: Typing a JS Library — Solution

## What was done

Replaced all `any` types in `src/math-utils.d.ts` with specific declarations matching the JS runtime:
- `add`, `multiply`, `clamp` → `(number, number) → number`
- `range` → `(number, number, number?) → number[]`
- `createStats` → `(number[]) → Stats`
- `Stats` interface with `min`, `max`, `mean`, `count` fields

## Run locally

```bash
npm install
npm run check
```
