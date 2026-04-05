import {
  assignOrderToUser,
  createOrderId,
  createOrderRecord,
  createProductId,
  createUserId,
  createUserRecord,
  reserveProduct,
} from '../../src/index.js';

describe('branded IDs runtime behavior', () => {
  it('keeps user ids as plain strings at runtime', () => {
    expect(createUserId('user:42')).toBe('user:42');
    expect(createUserRecord('Max')).toEqual({
      id: 'user:max',
      name: 'Max',
    });
  });

  it('formats relationships without changing runtime values', () => {
    const userId = createUserId('user:42');
    const orderId = createOrderId('order:99');
    const productId = createProductId('product:7');

    expect(assignOrderToUser(userId, orderId)).toBe('order:99 -> user:42');
    expect(reserveProduct(orderId, productId)).toBe('order:99:product:7');
  });

  it('creates an order record with the provided user id', () => {
    expect(createOrderRecord(createUserId('user:42'), 2599)).toEqual({
      id: 'order:2599',
      userId: 'user:42',
      totalCents: 2599,
    });
  });
});
