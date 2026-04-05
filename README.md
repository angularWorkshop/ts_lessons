# Topic 2.1 — Create a Project tsconfig

This branch contains the completed solution for the first exercise in Topic 2.

## Goal

Set up a real `tsconfig.json` for a small Node.js TypeScript project and make the compiler settings explicit.

## Task

The root `tsconfig.json` now does the following:

1. `strict` is enabled
2. `noUncheckedIndexedAccess` is enabled
3. `rootDir` is `./src`
4. `outDir` is `./dist`
5. the config includes the source files correctly

`tsconfig.vitest.json` is kept separately so test files can still be type-checked without affecting the source build config.

## Requirements

- the project config must compile source files into `dist/`
- `npm run check` must pass

## Run locally

```bash
npm install
npm run check
npm run build
```
