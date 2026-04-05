# Exercise 5.1: User model

## Goal

Practice object typing with `interface`, optional fields, readonly properties, and `extends`.

## Task

1. Create `interface User` with required and optional fields.
2. Create `interface Admin extends User` with extra permissions.
3. Implement `printUser(user: User): string`.
4. Make the runtime tests and type tests pass.

## Constraints

- keep strict typing
- do not use `any`
- `email` must stay optional
- `permissions` must be readonly

## Run locally

```bash
npm install
npm run check
```
