import type { ShippingZone } from '../contracts.js';

const baseRates = {
  local: 500,
  intl: 1500,
} satisfies Record<ShippingZone, number>;

export function getShippingCost(zone: ShippingZone, itemCount: number): number {
  if (itemCount === 0) {
    return 0;
  }

  return baseRates[zone] + Math.max(itemCount - 1, 0) * 100;
}
