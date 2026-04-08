import type { Coupon } from '../contracts.js';

export function calculateDiscount(subtotalCents: number, coupon?: Coupon): number {
  if (!coupon) {
    return 0;
  }

  if (coupon.type === 'percent') {
    return Math.round((subtotalCents * coupon.value) / 100);
  }

  return Math.min(subtotalCents, coupon.value);
}
