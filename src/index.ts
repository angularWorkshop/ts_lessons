export interface Repository<T, ID> {
  save(entity: T): void;
  getById(id: ID): unknown;
  getAll(): T[];
  update(entity: T): void;
  delete(id: ID): void;
}

export class InMemoryRepository<T extends object, ID> implements Repository<T, ID> {
  private readonly items = new Map<ID, T>();

  save(entity: T): void {
    this.items.set(crypto.randomUUID() as ID, entity);
  }

  getById(id: ID): unknown {
    return this.items.get(id);
  }

  getAll(): T[] {
    return Array.from(this.items.values());
  }

  update(entity: T): void {
    this.save(entity);
  }

  delete(id: ID): void {
    this.items.delete(id);
  }
}

export type User = {
  id: string;
  name: string;
  email: string;
};

export type Product = {
  id: number;
  title: string;
  price: number;
};

export const userRepository = new InMemoryRepository<User, string>();
export const productRepository = new InMemoryRepository<Product, number>();
