# Exercise 24.2: `@Validate`

## Goal

Practice property decorators and metadata-driven validation for class instances.

## Task

1. Implement `@Required` and `@MinLength(n)` for class properties.
2. Store validation rules as metadata keyed by the class prototype.
3. Implement `validate(instance)` so it checks every registered rule.
4. Make all tests pass without changing the tests.

## Constraints

- keep validation metadata outside the instance itself
- support multiple rules on the same property
- return readable string errors
- do not use `any`

## Run locally

```bash
npm install
npm run check
```
