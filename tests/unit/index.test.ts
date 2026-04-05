import { filterValues, mapValues } from '../../src/index';

describe('callback typing exercise', () => {
  it('maps numbers to strings', () => {
    expect(mapValues([1, 2, 3], (value: number) => `#${value}`)).toEqual(['#1', '#2', '#3']);
  });

  it('filters values with a typed predicate', () => {
    expect(filterValues([1, 2, 3, 4], (value: number) => value % 2 === 0)).toEqual([2, 4]);
  });
});
