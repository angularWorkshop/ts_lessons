# Exercise 25.2: typed environment with Zod solution

## What is implemented

- environment variables are described with a `zod` schema
- `DATABASE_URL` is validated as a URL
- `PORT` is coerced into a number
- `ENABLE_CACHE` is transformed into a boolean
- `createEnv` returns a fully typed `AppEnv`

## Outcome

The application startup now fails fast on bad environment configuration, while the rest of the codebase gets a typed env object instead of raw strings.
