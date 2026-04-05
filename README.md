# Exercise 22.1: DeepReadonly — Solution

## What was done

1. Implemented `DeepReadonly<T>` as a recursive conditional type.
2. Left function types unchanged so they remain callable.
3. Handled arrays recursively via `ReadonlyArray<...>`.
4. Made nested object properties readonly at every depth.
5. Verified runtime identity and compile-time readonly guarantees.

## Run locally

```bash
npm install
npm run check
```
