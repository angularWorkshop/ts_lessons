# Exercise 25.2: typed environment with Zod

## Goal

Practice runtime validation of environment variables, derive the final TypeScript type from the schema, and expose a typed `env` object.

## Task

1. Describe the required environment variables with a `zod` schema.
2. Parse raw env input at startup.
3. Convert string values into final runtime types where needed.
4. Export helpers that return a fully typed env object.
5. Make all tests pass.

## Constraints

- input must be `Record<string, string | undefined>`
- invalid env must fail with a readable `ZodError`
- `PORT` must become a number
- `ENABLE_CACHE` must become a boolean

## Run locally

```bash
npm install
npm run check
```
