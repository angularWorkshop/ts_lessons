# Exercise 9.1: Composable types

## Goal

Practice intersection types and composition of multiple object contracts into one reusable entity shape.

## Task

1. Describe `Timestamped`, `Identifiable`, and `Auditable`.
2. Compose them into `Entity`.
3. Implement `createEntity`.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- `Entity` must expose every field from all source contracts

## Run locally

```bash
npm install
npm run check
```
