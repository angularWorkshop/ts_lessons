# Exercise 5.2: type vs interface

## Goal

Learn when a union should be modeled with `type` and when an object contract should be modeled with `interface`.

## Task

1. Model the API response through a `type` union.
2. Model the application config through an `interface`.
3. Fix `getResponseMessage`.
4. Export the final choice in `selectionReason`.

## Constraints

- keep strict typing
- do not use `any`
- `ApiResponse` must represent distinct states
- `AppConfig` must stay augmentable as an interface

## Run locally

```bash
npm install
npm run check
```
