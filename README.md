# Exercise 12.1: CRUD DTO pattern

## Goal

Practice `Omit` and `Partial` by separating create and update DTOs from the full domain model.

## Task

1. Define `User`.
2. Create `CreateUserDto` with `Omit`.
3. Create `UpdateUserDto` with `Partial`.
4. Implement `createUser` and `updateUser`.
5. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- `createUser` must not accept `id` or `createdAt`
- every field in `UpdateUserDto` must be optional

## Run locally

```bash
npm install
npm run check
```
