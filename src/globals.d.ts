import type { AppEnv } from './types.js';

declare global {
  interface Array<T> {
    unique(): T[];
  }

  var ENV: AppEnv;
}

export {};
