# Exercise 20.1: Type tests for utility types

## Goal

Practice type-level testing with `vitest` and `expectTypeOf`.
You need to fix three custom utility types so that both runtime tests and type tests pass.

## Task

1. Fix `AsyncValue<T>` so it unwraps nested `Promise` values recursively.
2. Fix `Mutable<T>` so it removes top-level `readonly` modifiers.
3. Fix `UpdatePayload<T, ProtectedKeys>` so protected keys are excluded from the patch object.
4. Keep the runtime helpers in `src/index.ts` working as they are.
5. Make all tests pass.

## Constraints

- keep `Mutable<T>` shallow, do not make it deep
- `AsyncValue<T>` must work for both plain values and nested promises
- `UpdatePayload<T, ProtectedKeys>` must remove protected keys entirely, not turn them into `never`
- do not use `any`

## Run locally

```bash
npm install
npm run check
```
