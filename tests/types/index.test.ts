import { expect, test } from 'vitest';
import {
  createUser,
  updateUser,
  type CreateUserDto,
  type UpdateUserDto,
  type User,
} from '../../src/index';

const createDtoShape: CreateUserDto = {
  name: 'Max',
  email: 'max@example.com',
};

const updateDtoShape: UpdateUserDto = {
  name: 'Anna',
};

const createdUser: User = createUser(createDtoShape);
const updatedUser: User = updateUser(createdUser, updateDtoShape);

void createDtoShape;
void updateDtoShape;
void createdUser;
void updatedUser;

// @ts-expect-error create dto must not contain id.
const invalidCreateDto: CreateUserDto = {
  id: 'user:max@example.com',
  name: 'Max',
  email: 'max@example.com',
};

void invalidCreateDto;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
