import { expectTypeOf } from 'vitest';
import { add, multiply, clamp, range, createStats, type Stats } from '../../src/index.js';

describe('math-utils type declarations', () => {
  it('add accepts numbers and returns number', () => {
    expectTypeOf(add(1, 2)).not.toBeAny();
    expectTypeOf(add(1, 2)).toBeNumber();
  });

  it('multiply accepts numbers and returns number', () => {
    expectTypeOf(multiply(2, 3)).not.toBeAny();
    expectTypeOf(multiply(2, 3)).toBeNumber();
  });

  it('clamp accepts numbers and returns number', () => {
    expectTypeOf(clamp(5, 0, 10)).not.toBeAny();
    expectTypeOf(clamp(5, 0, 10)).toBeNumber();
  });

  it('range returns number[]', () => {
    expectTypeOf(range(0, 5)).not.toBeAny();
    expectTypeOf(range(0, 5)).toEqualTypeOf<number[]>();
  });

  it('createStats accepts number[] and returns Stats', () => {
    expectTypeOf(createStats([1, 2, 3])).not.toBeAny();
    expectTypeOf(createStats([1, 2, 3])).toEqualTypeOf<Stats>();
  });

  it('Stats has correct numeric fields', () => {
    expectTypeOf<Stats>().toHaveProperty('min').toBeNumber();
    expectTypeOf<Stats>().toHaveProperty('max').toBeNumber();
    expectTypeOf<Stats>().toHaveProperty('mean').toBeNumber();
    expectTypeOf<Stats>().toHaveProperty('count').toBeNumber();
  });
});
