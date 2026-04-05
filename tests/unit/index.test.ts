import { addUsd, convertEurToUsd, eur, formatMoney, rub, usd } from '../../src/index.js';

describe('branded currency runtime behavior', () => {
  it('keeps currency values as plain numbers at runtime', () => {
    expect(eur(10)).toBe(10);
    expect(usd(25.5)).toBe(25.5);
    expect(rub(90)).toBe(90);
  });

  it('converts EUR to USD with the provided rate', () => {
    expect(convertEurToUsd(eur(10), 1.1)).toBe(11);
  });

  it('adds USD values and formats the result', () => {
    const total = addUsd(usd(12.5), usd(7.25));

    expect(total).toBe(19.75);
    expect(formatMoney(total, 'USD')).toBe('USD 19.75');
  });
});
