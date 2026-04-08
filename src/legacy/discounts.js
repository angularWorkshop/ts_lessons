export function calculateDiscount(subtotalCents, coupon) {
  if (!coupon) {
    return 0;
  }

  if (coupon.type === 'percent') {
    return Math.round((subtotalCents * coupon.value) / 100);
  }

  return Math.min(subtotalCents, coupon.value);
}
