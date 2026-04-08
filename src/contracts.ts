export interface LineItem {
  sku: string;
  quantity: number;
  priceCents: number;
}

export type ShippingZone = 'local' | 'intl';

export type Coupon =
  | { type: 'percent'; value: number }
  | { type: 'fixed'; value: number };

export interface OrderReceipt {
  itemCount: number;
  subtotalCents: number;
  discountCents: number;
  shippingCents: number;
  totalCents: number;
  summaryLabel: string;
}
