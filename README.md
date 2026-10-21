# Type-Safe API Client

Starter project. TODOs are intentionally incomplete.

## Task

Complete the Endpoint response types, isSuccess, and apiGet. Keep the supplied ApiResponse discriminated union.

The transport and URL/payload helpers are supplied in src/transport.ts. No network or API key is needed. apiGet accepts an optional injected transport as the third argument. Detail routes require { id }; lists allow optional filters. ApiError keeps its status code; unexpected errors become 500; invalid payloads become 502.

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
