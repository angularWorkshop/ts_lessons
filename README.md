# Exercise 15.1: Type-safe events

## Goal

Practice template literal types by deriving event names from an object shape.

## Task

1. Implement `EventName<T>`.
2. Make `EventEmitter<T>.on(...)` accept only valid event names.
3. Type the handler payload according to the event source key.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- use `Capitalize` and template literal types

## Run locally

```bash
npm install
npm run check
```
