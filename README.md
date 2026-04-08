# Topic 28.1: TypeScript Monorepo

Build a small TypeScript monorepo for an analytics dashboard.

Packages:

- `@app/shared` — shared domain types and formatting helpers
- `@app/core` — dashboard assembly logic on top of shared utilities
- `@app/web` — presentation layer that consumes the core package

Current state:

- the package source code is already in place
- the root repository exposes the public API through `src/index.ts`
- `vitest` is configured to resolve workspace aliases
- `tsc -b` currently fails because the project references are incomplete

Your task:

1. Fix the `Project References` configuration so `tsc -b` can build the whole workspace.
2. Keep the dependency graph one-way: `shared -> core -> web`.
3. Ensure changes in `@app/shared` are visible from `@app/core` and `@app/web` without manual copying.

Acceptance criteria:

- `npm run typecheck` passes
- `npm run test` passes
- `npm run build` builds all projects with `tsc -b`
- there are no circular dependencies between packages

Local check:

```bash
PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH" \
~/.nvm/versions/node/v24.13.0/bin/node \
~/.nvm/versions/node/v24.13.0/lib/node_modules/npm/bin/npm-cli.js run check
```
