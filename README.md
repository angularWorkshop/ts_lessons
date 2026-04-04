# ts_lessons

Base repository for EduTec TypeScript course exercises.

Each exercise should branch from `main` into:

- `lesson-topic-XX-exercise-YY-slug`
- `answer-topic-XX-exercise-YY-slug`

The repository is intentionally framework-agnostic. It provides:

- strict TypeScript configuration
- unit tests via Vitest
- type tests via `expectTypeOf`
- library-ready build via `tsup`
- package validation via `npm pack`

## Scripts

- `npm run build` — build ESM, CJS and declarations into `dist/`
- `npm run typecheck` — run TypeScript without emitting files
- `npm run test` — run Vitest once
- `npm run test:watch` — run Vitest in watch mode
- `npm run check` — run typecheck and tests
- `npm run pack:check` — create a package tarball locally

## Suggested exercise layout

- `src/` — starter or answer implementation
- `tests/unit/` — behavioral tests
- `tests/types/` — type-level assertions
- `README.md` — exercise brief and local run instructions

## Local workflow

```bash
npm install
npm run check
npm run build
```

