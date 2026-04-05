import { expectTypeOf } from 'vitest';
import { createTodo, toggleTodo, type TodoItem } from '../../src/index';

describe('todo type behavior', () => {
  it('returns TodoItem from createTodo', () => {
    expectTypeOf(createTodo('Read TS docs')).toEqualTypeOf<TodoItem>();
  });

  it('returns TodoItem from toggleTodo', () => {
    expectTypeOf(
      toggleTodo({
        id: 'read-ts-docs',
        title: 'Read TS docs',
        done: false,
      })
    ).toEqualTypeOf<TodoItem>();
  });
});

