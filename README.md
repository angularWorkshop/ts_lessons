# Exercise 20.1: Type tests for utility types — Solution

## What was done

1. Implemented `AsyncValue<T>` as a recursive conditional type that unwraps nested promises.
2. Implemented `Mutable<T>` with `-readonly` so top-level properties become writable.
3. Implemented `UpdatePayload<T, ProtectedKeys>` with key remapping to exclude protected keys.
4. Kept the runtime helpers unchanged and verified them with unit tests.
5. Verified both runtime and type-level contracts with `vitest`.

## Run locally

```bash
npm install
npm run check
```
