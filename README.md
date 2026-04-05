# Exercise 10.2: Generic Repository

## Goal

Practice generic interfaces, multiple type parameters, and constraints like `T extends { id: ID }`.

## Task

1. Create `Repository<T, ID>` with CRUD methods.
2. Implement `InMemoryRepository<T extends { id: ID }, ID>`.
3. Reuse one repository class for `User` and `Product`.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- repository entities must always have an `id` field

## Run locally

```bash
npm install
npm run check
```
