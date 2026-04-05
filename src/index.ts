// TODO: add a nominal brand marker so different IDs are no longer interchangeable.
export type Brand<T, Tag extends string> = T;

export type UserId = Brand<string, 'UserId'>;
export type OrderId = Brand<string, 'OrderId'>;
export type ProductId = Brand<string, 'ProductId'>;

export interface UserRecord {
  id: UserId;
  name: string;
}

export interface OrderRecord {
  id: OrderId;
  userId: UserId;
  totalCents: number;
}

export function createUserId(raw: string): UserId {
  return raw as UserId;
}

export function createOrderId(raw: string): OrderId {
  return raw as OrderId;
}

export function createProductId(raw: string): ProductId {
  return raw as ProductId;
}

export function createUserRecord(name: string): UserRecord {
  return {
    id: createUserId(`user:${name.toLowerCase()}`),
    name,
  };
}

export function assignOrderToUser(userId: UserId, orderId: OrderId): string {
  return `${orderId} -> ${userId}`;
}

export function reserveProduct(orderId: OrderId, productId: ProductId): string {
  return `${orderId}:${productId}`;
}

export function createOrderRecord(userId: UserId, totalCents: number): OrderRecord {
  return {
    id: createOrderId(`order:${totalCents}`),
    userId,
    totalCents,
  };
}
