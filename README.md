# Exercise 22.2: DeepPick

## Goal

Practice recursive type-level path traversal by implementing `DeepPick<T, Path>` for dot-notation paths like `user.profile.address.city`.

## Task

1. Implement `Paths<T>` so it produces valid dot-notation paths for nested objects.
2. Implement `DeepPick<T, Path>` so it resolves the type at the given path.
3. Keep `getDeepValue` restricted to valid paths only.
4. Make all tests pass.

## Constraints

- do not use `any`
- invalid paths must fail at compile time
- the runtime helper may stay generic, but the returned type must match the path

## Run locally

```bash
npm install
npm run check
```
