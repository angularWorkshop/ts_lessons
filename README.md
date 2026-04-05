# Exercise 21.1: Branded entity IDs

## Goal

Practice branded types for domain identifiers and prevent accidental mixing of IDs that are all represented by strings at runtime.

## Task

1. Implement a reusable `Brand<T, Tag>` helper.
2. Define `UserId`, `OrderId`, and `ProductId` with distinct brands.
3. Make the factory functions return the correct branded IDs.
4. Ensure `assignOrderToUser` and `reserveProduct` only accept the matching ID types.
5. Make all tests pass.

## Constraints

- keep runtime values as plain strings
- do not use `any`
- different branded IDs must not be assignable to each other

## Run locally

```bash
npm install
npm run check
```
