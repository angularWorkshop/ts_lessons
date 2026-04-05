# Topic 4.1 — Arrays and Tuples

This branch contains the starter for the first exercise in Topic 4.

## Goal

Practice array typing, readonly collections, and tuple return values.

## Task

Finish `src/index.ts`.

You need to:

1. type the exported `users` array
2. implement `getPrimaryContact`
3. return a tuple with the shape `[boolean, string]`

## Requirements

- each user must have `id` and `name`
- `users` must be a readonly array
- `getPrimaryContact([])` must return `[false, 'No users']`
- `getPrimaryContact(users)` must return `[true, '<first user name>']`
- do not use `any`

## Run locally

```bash
npm install
npm run check
npm run build
```
