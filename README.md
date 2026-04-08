# Exercise 26.1: compiler diagnostics and optimization

## Goal

Practice reading `tsc --extendedDiagnostics` output, comparing cold and repeated builds, and assembling a more predictable TypeScript compiler profile.

## Task

1. Parse a raw `extendedDiagnostics` report into structured metrics.
2. Compare a cold build against a repeated build and compute the improvement.
3. Build an optimized compiler config profile with incremental compilation enabled.
4. Make all tests pass.

## Constraints

- do not use `any`
- parse metrics from a plain multiline string
- preserve existing useful config fields while optimizing
- repeated build must be recognized as faster only when the total time actually drops

## Run locally

```bash
npm install
npm run check
```
