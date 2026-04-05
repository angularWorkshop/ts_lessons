# Exercise 21.1: Branded entity IDs — Solution

## What was done

1. Implemented `Brand<T, Tag>` with a readonly phantom marker.
2. Defined distinct `UserId`, `OrderId`, and `ProductId` aliases on top of the shared helper.
3. Kept all runtime values as plain strings via factory functions.
4. Locked function signatures so entity IDs cannot be mixed accidentally.
5. Verified runtime behavior and compile-time rejection of swapped IDs.

## Run locally

```bash
npm install
npm run check
```
