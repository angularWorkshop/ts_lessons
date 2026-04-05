# Exercise 13.1: Configuration via Record

## Goal

Practice `Record<K, V>` by describing a strict config object with fixed keys and shared value rules.

## Task

1. Define `ConfigKey` as a union of string literals.
2. Create `AppConfig` via `Record<ConfigKey, ConfigValue>`.
3. Implement `validateConfig`.
4. Make all tests pass.

## Constraints

- keep strict typing
- do not use `any`
- config must require every key from the union
- extra keys must be rejected at compile time

## Run locally

```bash
npm install
npm run check
```
