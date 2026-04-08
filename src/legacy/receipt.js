import { calculateDiscount } from './discounts.js';
import { calculateSubtotal, formatCents } from './money.js';
import { getShippingCost } from './shipping.js';

export function buildOrderReceipt(items, shippingZone, coupon) {
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
