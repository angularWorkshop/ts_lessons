# Exercise 19.1: Setting up ESLint for a TS Project

## Goal

Configure ESLint with typescript-eslint, enable type-aware rules, and fix all violations.

## Task

1. Complete `eslint.config.mjs` using `typescript-eslint`.
2. Enable `recommendedTypeChecked` preset for type-aware linting.
3. Add rules: `no-explicit-any`, `no-floating-promises`, `no-unused-vars`, `consistent-type-imports`.
4. Fix all lint violations in `src/index.ts`.
5. Update `npm run check` to include linting.
6. Make all tests pass.

## Constraints

- do not remove any exported functions
- replace `any` with `unknown`, not with a made-up type
- handle the floating promise properly (await or void)

## Run locally

```bash
npm install
npm run lint
npm run check
```
