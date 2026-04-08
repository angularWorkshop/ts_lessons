import { buildOrderReceipt, calculateDiscount, calculateSubtotal, formatCents, getShippingCost } from '../../src/index.js';

describe('legacy module runtime behavior', () => {
  it('calculates subtotal and formats cents', () => {
    expect(
      calculateSubtotal([
        { sku: 'A', quantity: 2, priceCents: 1500 },
        { sku: 'B', quantity: 1, priceCents: 4000 },
      ]),
    ).toBe(7000);

    expect(formatCents(7000)).toBe('$70.00');
  });

  it('calculates discount and shipping', () => {
    expect(calculateDiscount(7000, { type: 'percent', value: 10 })).toBe(700);
    expect(calculateDiscount(7000, { type: 'fixed', value: 2500 })).toBe(2500);
    expect(getShippingCost('local', 3)).toBe(700);
  });

  it('builds an order receipt', () => {
    expect(
      buildOrderReceipt(
        [
          { sku: 'A', quantity: 2, priceCents: 1500 },
          { sku: 'B', quantity: 1, priceCents: 4000 },
        ],
        'intl',
        { type: 'percent', value: 10 },
      ),
    ).toEqual({
      itemCount: 3,
      subtotalCents: 7000,
      discountCents: 700,
      shippingCents: 1700,
      totalCents: 8000,
      summaryLabel: '3 items • $80.00',
    });
  });
});
