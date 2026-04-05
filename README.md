# Exercise 24.2: `@Validate` solution

## What is implemented

- `@Required` registers mandatory fields
- `@MinLength(n)` registers string-length constraints
- metadata is stored per prototype in a `WeakMap`
- `validate(instance)` walks through every registered rule and returns readable errors

## Outcome

`RegistrationForm` now has explicit validation rules colocated with the model definition, while the validation engine stays reusable and type-safe.
