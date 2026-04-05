import { expect, test } from 'vitest';
import { fetchData, isTodo, type Todo } from '../../src/index';

type User = {
  id: string;
  name: string;
};

const isUser = (value: unknown): value is User => {
  return typeof value === 'object' && value !== null && 'id' in value && 'name' in value;
};

const typedTodoPromise: Promise<Todo> = fetchData('/todos/1', isTodo, async () => ({
  id: 1,
  title: 'Learn generics',
  completed: false,
}));

const typedUserPromise: Promise<User> = fetchData('/users/1', isUser, async () => ({
  id: 'user-1',
  name: 'Max',
}));

void typedTodoPromise;
void typedUserPromise;

// @ts-expect-error The generic result must follow the provided guard.
const wrongPromise: Promise<Todo> = fetchData('/users/1', isUser, async () => ({
  id: 'user-1',
  name: 'Max',
}));

void wrongPromise;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
