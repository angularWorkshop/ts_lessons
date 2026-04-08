# Topic 29.1: Publish a Mini TypeScript Library

Prepare a small utility library for distribution.

The library should expose:

- branded primitive helpers
- a `Result` type with runtime constructors and guards
- a recursive `DeepReadonly` utility type

Current state:

- the public API is already implemented in `src/index.ts`
- runtime and type tests cover the library surface
- the package manifest is still incomplete for publishing

Your task:

1. Finish the package publishing configuration.
2. Make the package work for both `import` and `require`.
3. Ensure type checks run automatically before `npm pack`.
4. Keep the generated declarations and package entrypoints aligned.

Acceptance criteria:

- `npm run check` passes
- `npm run build` produces ESM, CJS and `.d.ts`
- `npm run pack:check` succeeds
- the package manifest contains a correct exports map and prepack hook

Local verification:

```bash
PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH" \
~/.nvm/versions/node/v24.13.0/bin/node \
~/.nvm/versions/node/v24.13.0/lib/node_modules/npm/bin/npm-cli.js run check

PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH" \
~/.nvm/versions/node/v24.13.0/bin/node \
~/.nvm/versions/node/v24.13.0/lib/node_modules/npm/bin/npm-cli.js run pack:check
```
