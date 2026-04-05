# Exercise 23.1: Result type solution

## What is implemented

- `ok(value)` returns a successful `Result<T, never>`
- `err(error)` returns a failed `Result<never, E>`
- `map` transforms only the success branch
- `mapErr` transforms only the error branch
- `match` unwraps the value in a type-safe way
- `parseJsonResult` converts invalid JSON into `err('Invalid JSON')`

## Outcome

The consumer code can compose transformations without `try/catch`, while the error path stays explicit in the type system.
