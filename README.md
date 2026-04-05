# Exercise 22.2: DeepPick — Solution

## What was done

1. Implemented `Paths<T>` as a recursive union of valid dot-notation paths.
2. Implemented `DeepPick<T, Path>` to resolve the type at the final segment.
3. Restricted `getDeepValue` to valid paths only.
4. Kept the runtime helper generic while preserving the exact return type.
5. Verified both valid inference and compile-time rejection of invalid paths.

## Run locally

```bash
npm install
npm run check
```
