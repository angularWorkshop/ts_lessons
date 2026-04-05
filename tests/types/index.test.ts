import { expect, test } from 'vitest';
import {
  assignOrderToUser,
  createOrderId,
  createProductId,
  createUserId,
  reserveProduct,
  type OrderId,
  type ProductId,
  type UserId,
} from '../../src/index.js';

const userId: UserId = createUserId('user:1');
const orderId: OrderId = createOrderId('order:1');
const productId: ProductId = createProductId('product:1');

const userIdMustStayDistinct: UserId = createUserId('user:2');
const orderIdMustStayDistinct: OrderId = createOrderId('order:2');
const productIdMustStayDistinct: ProductId = createProductId('product:2');

const userOrderAssignment: string = assignOrderToUser(userId, orderId);
const reservationKey: string = reserveProduct(orderId, productId);

void userIdMustStayDistinct;
void orderIdMustStayDistinct;
void productIdMustStayDistinct;
void userOrderAssignment;
void reservationKey;

// @ts-expect-error order ids must not be assignable to user ids.
const wrongUserId: UserId = orderId;

// @ts-expect-error product ids must not be assignable to order ids.
const wrongOrderId: OrderId = productId;

// @ts-expect-error user id and order id positions must not be swappable.
assignOrderToUser(orderId, userId);

// @ts-expect-error reserveProduct requires an OrderId as the first argument.
reserveProduct(userId, productId);

void wrongUserId;
void wrongOrderId;

test('branded entity IDs compile correctly', () => {
  expect(true).toBe(true);
});
