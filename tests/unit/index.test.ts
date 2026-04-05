import { describe, expect, it, vi } from 'vitest';
import { fetchData, isTodo, type Todo } from '../../src/index';

describe('fetchData', () => {
  it('returns typed payload when guard passes', async () => {
    const todo: Todo = {
      id: 1,
      title: 'Learn generics',
      completed: false,
    };
    const fetcher = vi.fn(async () => todo);

    await expect(fetchData('/todos/1', isTodo, fetcher)).resolves.toEqual(todo);
    expect(fetcher).toHaveBeenCalledWith('/todos/1');
  });

  it('throws when guard rejects payload', async () => {
    const fetcher = vi.fn(async () => ({
      id: 'wrong',
      title: 'Broken payload',
      completed: 'nope',
    }));

    await expect(fetchData('/todos/1', isTodo, fetcher)).rejects.toThrow(
      'Invalid response for /todos/1',
    );
  });
});
