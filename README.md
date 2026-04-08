# Capstone 3: Type-Safe Mini-Framework

Build a publish-ready mini-framework around a type-safe router.

Project requirements:

- `Router<Routes>` with route-name and route-input inference
- branded types for framework entities
- `Result`-based error handling
- Zod validation for route inputs
- decorators for logging and caching
- type tests for the public API
- dual ESM/CJS package that survives `npm pack`

Current lesson state:

- the public API surface is scaffolded
- branded helpers, `Result`, decorators, and route definitions are in place
- package publishing config is already wired
- the core router behavior is still incomplete

Your task:

1. Implement `buildPath()` so it validates route input and resolves a final path.
2. Implement `navigate()` so it returns a typed navigation record wrapped in `Result`.
3. Keep Zod parsing, branded outputs, caching, and logging behavior intact.
4. Ensure `npm run check` and `npm run pack:check` both pass.

Acceptance criteria:

- invalid route input returns `Err`
- valid navigation returns branded route data
- repeated path builds reuse cached results
- logs record decorated router calls
- the package builds and packs as a dual-mode library

Local verification:

```bash
PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH" \
~/.nvm/versions/node/v24.13.0/bin/node \
~/.nvm/versions/node/v24.13.0/lib/node_modules/npm/bin/npm-cli.js run check

PATH="$HOME/.nvm/versions/node/v24.13.0/bin:$PATH" \
npm_config_cache=/tmp/npm-cache-ts-lessons \
~/.nvm/versions/node/v24.13.0/bin/node \
~/.nvm/versions/node/v24.13.0/lib/node_modules/npm/bin/npm-cli.js run pack:check
```
