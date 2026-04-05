# Exercise 21.2: Branded currencies — Solution

## What was done

1. Implemented `Brand<T, Tag>` with a phantom readonly marker.
2. Defined `EUR`, `USD`, and `RUB` as distinct branded numeric types.
3. Kept all runtime values as plain numbers through small factory helpers.
4. Preserved explicit conversion via `convertEurToUsd` and restricted addition to `USD` only.
5. Verified that mixed currencies fail at compile time while runtime helpers still work.

## Run locally

```bash
npm install
npm run check
```
