import { expect, test } from 'vitest';
import {
  buildOrderReceipt,
  calculateDiscount,
  calculateSubtotal,
  formatCents,
  getShippingCost,
  type Coupon,
  type LineItem,
  type OrderReceipt,
  type ShippingZone,
} from '../../src/index.js';

const items: LineItem[] = [
  { sku: 'A', quantity: 2, priceCents: 1500 },
  { sku: 'B', quantity: 1, priceCents: 4000 },
];

const zone: ShippingZone = 'local';
const coupon: Coupon = { type: 'percent', value: 10 };
const receipt: OrderReceipt = buildOrderReceipt(items, zone, coupon);

void receipt;

// @ts-expect-error shipping zone must be a strict union.
buildOrderReceipt(items, 'moon-base', coupon);

// @ts-expect-error quantity must stay numeric during migration.
calculateSubtotal([{ sku: 'A', quantity: '2', priceCents: 1500 }]);

test('type contracts compile', () => {
  expect(true).toBe(true);
});
