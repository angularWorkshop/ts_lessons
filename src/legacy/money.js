export function calculateSubtotal(items) {
  return items.reduce((total, item) => total + item.quantity * item.priceCents, 0);
}

export function formatCents(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}
