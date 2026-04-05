# Topic 1.1 — First Typed Greeting

## Goal

Write your first typed TypeScript functions and see how runtime tests and type tests validate the result together.

## Task

Finish the starter code in `src/index.ts`.

You need to implement:

1. `greet(name: string): string`
2. `greetAll(names: readonly string[]): string[]`

## Requirements

- `greet('Max')` must return `Hello, Max!`
- `greetAll(['Max', 'Anna'])` must return `['Hello, Max!', 'Hello, Anna!']`
- `greetAll` must reuse `greet`
- keep strict typing
- do not use `any`

## Run locally

```bash
npm install
npm run check
npm run build
```
