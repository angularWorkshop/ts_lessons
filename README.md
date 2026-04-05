# Exercise 16.2: Routes with as const

## Goal

Practice `as const` and derive a route union from an immutable route list.

## Task

1. Create a route list with `as const`.
2. Derive `RoutePath` from `typeof routes[number]`.
3. Use it in `navigateTo`.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- invalid routes must fail at compile time

## Run locally

```bash
npm install
npm run check
```
