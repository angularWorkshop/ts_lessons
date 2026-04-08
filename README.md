# Exercise 25.1: API response validation with Zod solution

## What is implemented

- the API payload is described with a `zod` schema
- the `UserApiResponse` type is inferred via `z.infer`
- validation is done with `safeParse`
- invalid payloads return a failed result instead of throwing
- `getUserWelcomeLabel` returns `null` for invalid input

## Outcome

The runtime contract and the TypeScript type now come from the same schema, which removes drift between compile-time assumptions and real API data.
