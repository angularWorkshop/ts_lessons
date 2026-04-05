import { expectTypeOf } from 'vitest';
import { greet, greetAll } from '../../src/index';

describe('first typed greeting types', () => {
  it('uses a string parameter and string return type for greet', () => {
    expectTypeOf(greet).parameters.toEqualTypeOf<[string]>();
    expectTypeOf(greet).returns.toEqualTypeOf<string>();
  });

  it('uses readonly string arrays in greetAll', () => {
    expectTypeOf(greetAll).parameters.toEqualTypeOf<[readonly string[]]>();
    expectTypeOf(greetAll).returns.toEqualTypeOf<string[]>();
  });
});
