import { expectTypeOf } from 'vitest';
import { parseJson, getLength, double, sum, clamp } from '../../src/index.js';

describe('lint-fixed type contracts', () => {
  it('parseJson returns unknown after fixing any', () => {
    expectTypeOf(parseJson('1')).not.toBeAny();
  });

  it('getLength handles undefined safely', () => {
    expectTypeOf(getLength).parameter(0).toEqualTypeOf<string | undefined>();
  });

  it('double returns number', () => {
    expectTypeOf(double(1)).toBeNumber();
  });

  it('sum returns number', () => {
    expectTypeOf(sum([1])).toBeNumber();
  });

  it('clamp returns number', () => {
    expectTypeOf(clamp(1, 0, 10)).toBeNumber();
  });
});
