import { expectTypeOf } from 'vitest';
import '../../src/index.js';
import type { AppEnv } from '../../src/types.js';

describe('Array.prototype.unique type', () => {
  it('returns T[] for number arrays', () => {
    const result = [1, 2, 3].unique();
    expectTypeOf(result).toEqualTypeOf<number[]>();
  });

  it('returns T[] for string arrays', () => {
    const result = ['a', 'b'].unique();
    expectTypeOf(result).toEqualTypeOf<string[]>();
  });

  it('existing methods still work', () => {
    expectTypeOf([1, 2].map((x) => x > 0)).toEqualTypeOf<boolean[]>();
  });
});

describe('global ENV type', () => {
  it('ENV is typed as AppEnv', () => {
    expectTypeOf(globalThis.ENV).toEqualTypeOf<AppEnv>();
  });

  it('ENV.mode is a union of string literals', () => {
    expectTypeOf(globalThis.ENV.mode).toEqualTypeOf<'development' | 'production' | 'test'>();
  });

  it('ENV.debug is boolean', () => {
    expectTypeOf(globalThis.ENV.debug).toBeBoolean();
  });
});
