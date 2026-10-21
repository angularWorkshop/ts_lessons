# Generic Form Validator

Reference solution. The exact same tests are used in the starter.

## Task

Fix ValidationSchema so each field K receives ValidationRule<T[K]>. Implement validate and isValid.

The schema must include every field, even optional-valued fields. Each rule returns null or an error string. Keep the first failing rule per field, continue with other fields, and return the original object on success. Do not mutate the form or rules.

## Files to edit

src/index.ts

## Checks

```bash
npm install
npm run typecheck
npm test
npm run build
```

StackBlitz installs dependencies and starts the status runner automatically. Changes trigger another check. The starter reports NOT COMPLETED until the task is solved; the answer reports COMPLETED. The starter also contains intentional type errors in the exercise contract; fix the TODO types rather than weakening type tests or compiler options.

Do not edit tests to complete the exercise.
