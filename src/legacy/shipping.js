const baseRates = {
  local: 500,
  intl: 1500,
};

export function getShippingCost(zone, itemCount) {
  if (itemCount === 0) {
    return 0;
  }

  return (baseRates[zone] ?? 1500) + Math.max(itemCount - 1, 0) * 100;
}
