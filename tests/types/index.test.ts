import { expectTypeOf } from 'vitest';
import { formatUser, isAdult, sumPrices, type User } from '../../src/index';

describe('legacy js helpers types', () => {
  it('keeps a readonly number array contract for sumPrices', () => {
    expectTypeOf(sumPrices).parameters.toEqualTypeOf<[readonly number[]]>();
    expectTypeOf(sumPrices).returns.toEqualTypeOf<number>();
  });

  it('uses the User object shape in formatUser', () => {
    expectTypeOf(formatUser).parameters.toEqualTypeOf<[User]>();
    expectTypeOf(formatUser).returns.toEqualTypeOf<string>();
  });

  it('uses number to boolean for isAdult', () => {
    expectTypeOf(isAdult).parameters.toEqualTypeOf<[number]>();
    expectTypeOf(isAdult).returns.toEqualTypeOf<boolean>();
  });
});
