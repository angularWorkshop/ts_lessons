# Exercise 10.1: Generic Stack

## Goal

Practice generic classes and make one stack implementation work safely for different value types.

## Task

1. Implement `Stack<T>` with `push`, `pop`, and `peek`.
2. Ensure `pop` returns `T | undefined`.
3. Create `numberStack` and `stringStack`.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- `Stack<string>` must reject numbers at compile time

## Run locally

```bash
npm install
npm run check
```
