# Exercise 18.1: Strict Mode Migration — Solution

## What was done

1. Enabled `strict: true`, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitOverride`
2. Fixed all type errors:
   - `formatUserName(user: User)` — explicit parameter type
   - `getUserById` returns `string | undefined`, uses optional chaining
   - `getFirstElement` returns `string | undefined`
   - `ApiClient` — added constructor with `baseUrl` param
   - `PrefixLogger.log` — added `override`
   - `createConfig` — omit `debug` instead of assigning `undefined`

## Run locally

```bash
npm install
npm run check
```
