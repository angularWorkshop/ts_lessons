# Exercise 17.2: Global Type Augmentation

## Goal

Use `declare global` to augment built-in types and add global variables with proper typing.

## Task

1. Open `src/globals.d.ts` and fill in the `declare global` block.
2. Augment `Array<T>` with a `unique(): T[]` method.
3. Declare a global `ENV` variable of type `AppEnv`.
4. The runtime implementations in `src/index.ts` are already in place — only the type declarations are missing.
5. Make all tests pass.

## Constraints

- only modify `src/globals.d.ts` — do not touch `src/index.ts` or `src/types.ts`
- do not use `any`
- the augmentation must not break existing Array methods

## Run locally

```bash
npm install
npm run check
```
