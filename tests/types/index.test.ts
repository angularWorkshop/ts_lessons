import { expect, test } from 'vitest';
import {
  InMemoryRepository,
  type Product,
  type Repository,
  type User,
  productRepository,
  userRepository,
} from '../../src/index';

const userRepositoryMustMatchContract: Repository<User, string> = userRepository;
const productRepositoryMustMatchContract: Repository<Product, number> = productRepository;
const userResultMustBeTyped: User | undefined = userRepository.getById('user-1');
const productResultMustBeTyped: Product | undefined = productRepository.getById(101);

void userRepositoryMustMatchContract;
void productRepositoryMustMatchContract;
void userResultMustBeTyped;
void productResultMustBeTyped;

// @ts-expect-error Repository entities must include an id field.
const invalidRepository = new InMemoryRepository<{ name: string }, string>();

void invalidRepository;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
