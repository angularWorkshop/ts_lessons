import { formatUser, sumPrices } from '../../src/index';

describe('function samples', () => {
  it('formats a user label', () => {
    expect(formatUser('Max', 29)).toBe('Max (29)');
  });

  it('sums prices', () => {
    expect(sumPrices(10, 15, 25)).toBe(50);
  });
});
