# Topic 4.2 — Status Enum

This branch contains the starter for the second exercise in Topic 4.

## Goal

Practice string enums and use them instead of ad-hoc string literals in filtering logic.

## Task

Finish `src/index.ts`.

You need to:

1. create a string `enum Status`
2. use it inside the user model
3. implement `filterUsersByStatus`

## Requirements

- `Status` must include `Active`, `Inactive`, and `Pending`
- users must store `status` through the enum, not plain string literals
- filtering must return only users with the requested status
- do not use `any`

## Run locally

```bash
npm install
npm run check
npm run build
```
