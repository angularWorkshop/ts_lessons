# Topic 4.1 — Arrays and Tuples

This branch contains the completed solution for the first exercise in Topic 4.

## Goal

Practice array typing, readonly collections, and tuple return values.

## Task

The final solution does the following:

1. type the exported `users` array
2. implement `getPrimaryContact`
3. return a tuple with the shape `[boolean, string]`

## Requirements

- each user must have `id` and `name`
- `users` is a readonly array
- `getPrimaryContact([])` must return `[false, 'No users']`
- `getPrimaryContact(users)` must return `[true, '<first user name>']`
- do not use `any`

## Run locally

```bash
npm install
npm run check
npm run build
```
