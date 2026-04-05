import type { AppEnv } from './types.js';

// TODO: Use `declare global` to augment the global scope.
//
// 1. Add a `unique(): T[]` method to the built-in Array<T> interface.
//    At runtime it returns a new array with duplicates removed.
//
// 2. Declare a global `ENV` variable of type AppEnv.
//    At runtime it lives on globalThis and is set in index.ts.
//
// Syntax reminder:
//   declare global {
//     interface Array<T> { ... }
//     var ENV: SomeType;
//   }

declare global {
  // TODO: augment Array<T> with unique(): T[]
  // TODO: declare var ENV: AppEnv
}

export {};
