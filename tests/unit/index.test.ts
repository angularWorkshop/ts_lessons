import { formatUser, isAdult, sumPrices } from '../../src/index';

describe('legacy js helpers', () => {
  it('sums numbers without changing runtime behavior', () => {
    expect(sumPrices([10, 15.5, 4.5])).toBe(30);
  });

  it('formats the user label', () => {
    expect(formatUser({ name: 'Max', age: 28 })).toBe('Max (28)');
  });

  it('detects adult age correctly', () => {
    expect(isAdult(18)).toBe(true);
    expect(isAdult(16)).toBe(false);
  });
});
