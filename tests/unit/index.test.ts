import { InMemoryRepository, type Product, type User } from '../../src/index';

describe('InMemoryRepository', () => {
  it('stores and returns users by string id', () => {
    const repository = new InMemoryRepository<User, string>();
    const user: User = {
      id: 'user-1',
      name: 'Max',
      email: 'max@example.com',
    };

    repository.save(user);

    expect(repository.getById('user-1')).toEqual(user);
    expect(repository.getAll()).toEqual([user]);
  });

  it('updates and deletes products by numeric id', () => {
    const repository = new InMemoryRepository<Product, number>();
    const firstVersion: Product = {
      id: 101,
      title: 'Keyboard',
      price: 120,
    };
    const updatedVersion: Product = {
      id: 101,
      title: 'Keyboard',
      price: 150,
    };

    repository.save(firstVersion);
    repository.update(updatedVersion);

    expect(repository.getById(101)).toEqual(updatedVersion);
    expect(repository.delete(101)).toBe(true);
    expect(repository.getById(101)).toBeUndefined();
  });
});
