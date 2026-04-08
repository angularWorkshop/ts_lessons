import type { LineItem } from '../contracts.js';

export function calculateSubtotal(items: readonly LineItem[]): number {
  return items.reduce((total, item) => total + item.quantity * item.priceCents, 0);
}

export function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
