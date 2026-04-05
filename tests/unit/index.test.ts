import { createUser, updateUser, type User } from '../../src/index';

describe('CRUD DTO helpers', () => {
  it('creates a full user from create dto', () => {
    const createdUser = createUser({
      name: 'Max',
      email: 'max@example.com',
    });

    expect(createdUser.id).toBe('user:max@example.com');
    expect(createdUser.name).toBe('Max');
    expect(createdUser.email).toBe('max@example.com');
    expect(createdUser.createdAt).toBeInstanceOf(Date);
  });

  it('updates only provided fields', () => {
    const user: User = {
      id: 'user:max@example.com',
      name: 'Max',
      email: 'max@example.com',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
    };

    expect(updateUser(user, { name: 'Anna' })).toEqual({
      id: 'user:max@example.com',
      name: 'Anna',
      email: 'max@example.com',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
    });
  });
});
