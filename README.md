# Exercise 25.1: API response validation with Zod

## Goal

Practice runtime validation with `zod`, infer TypeScript types from the schema, and handle invalid payloads through `safeParse`.

## Task

1. Describe the API response with a `zod` schema.
2. Infer the TypeScript type from the schema via `z.infer`.
3. Validate unknown input with `safeParse`.
4. Return a safe display label only for valid payloads.
5. Make all tests pass.

## Constraints

- do not use `any`
- keep the API input type as `unknown`
- invalid payloads must not throw
- role and email must be validated by the schema

## Run locally

```bash
npm install
npm run check
```
