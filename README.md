# Exercise 17.2: Global Type Augmentation — Solution

## What was done

Filled in `src/globals.d.ts` with two global augmentations:
- `interface Array<T> { unique(): T[] }` — adds a typed `unique` method
- `var ENV: AppEnv` — declares the global ENV variable with its exact type

## Run locally

```bash
npm install
npm run check
```
