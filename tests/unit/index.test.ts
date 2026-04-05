import { add, sumAll } from '../../src/index';

describe('overloaded add exercise', () => {
  it('adds numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('concatenates strings', () => {
    expect(add('Type', 'Script')).toBe('TypeScript');
  });

  it('sums multiple numbers with a rest parameter', () => {
    expect(sumAll(2, 3, 5)).toBe(10);
  });
});
