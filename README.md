# Exercise 24.1: `@Log` and `@Memoize` solution

## What is implemented

- `@Log()` records method calls as `methodName(arg1, arg2, ...)`
- `@Memoize()` caches results by serialized arguments
- cache storage is isolated per class instance via `WeakMap`
- decorated methods keep their original return types

## Outcome

`PricingService` now demonstrates two common method decorators: one for observability and one for performance through repeat-call caching.
