# Exercise 27.1: migrate a JS module to TypeScript solution

## What is implemented

- the legacy module was migrated from `.js` files to `.ts` files
- shared domain contracts are reused across every file
- invalid shipping zones and malformed line items now fail at compile time
- runtime behavior stayed unchanged during the migration

## Outcome

The exercise now shows a realistic incremental migration path: preserve the module structure, convert files one by one, and tighten the API until invalid calls stop compiling.
