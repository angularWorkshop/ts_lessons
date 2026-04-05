/// <reference path="./globals.d.ts" />
export type { AppEnv } from './types.js';

// Runtime: add unique() to Array prototype
Array.prototype.unique = function <T>(this: T[]): T[] {
  return [...new Set(this)];
};

// Runtime: set global ENV
globalThis.ENV = {
  mode: 'development',
  version: '1.0.0',
  debug: true,
};

export function getEnv() {
  return globalThis.ENV;
}
