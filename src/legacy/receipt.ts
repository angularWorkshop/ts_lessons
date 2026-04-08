import { calculateDiscount } from './discounts.js';
import { calculateSubtotal, formatCents } from './money.js';
import { getShippingCost } from './shipping.js';
import type { Coupon, LineItem, OrderReceipt, ShippingZone } from '../contracts.js';

export function buildOrderReceipt(
  items: readonly LineItem[],
  shippingZone: ShippingZone,
  coupon?: Coupon,
): OrderReceipt {
  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const subtotalCents = calculateSubtotal(items);
  const discountCents = calculateDiscount(subtotalCents, coupon);
  const shippingCents = getShippingCost(shippingZone, itemCount);
  const totalCents = Math.max(subtotalCents - discountCents + shippingCents, 0);

  return {
    itemCount,
    subtotalCents,
    discountCents,
    shippingCents,
    totalCents,
    summaryLabel: `${itemCount} items • ${formatCents(totalCents)}`,
  };
}
