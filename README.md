# Exercise 8.1: API response guards

## Goal

Practice union types and custom type guards for narrowing API responses.

## Task

1. Define a strict `ApiResponse` union.
2. Turn `isSuccess` into a real type guard.
3. Implement `getResponseSummary`.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- `isSuccess` must narrow to the success branch

## Run locally

```bash
npm install
npm run check
```
