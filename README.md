# Exercise 19.1: Setting up ESLint for a TS Project — Solution

## What was done

1. Configured `eslint.config.mjs` with `typescript-eslint` and `recommendedTypeChecked`
2. Enabled `projectService` for type-aware linting
3. Fixed all violations:
   - `parseJson` returns `unknown` instead of `any`
   - Removed unused `DEFAULT_TIMEOUT`
   - Replaced `value!.length` with `value?.length ?? 0`
   - Removed unnecessary `as number` assertion
   - Added `void` before floating promise
   - Changed to `import type { Readable }`
4. Updated `check` script to include `lint`

## Run locally

```bash
npm install
npm run check
```
