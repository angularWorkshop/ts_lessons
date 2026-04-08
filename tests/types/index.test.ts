import { expectTypeOf } from 'vitest';
import {
  createBrand,
  err,
  mapResult,
  ok,
  type Brand,
  type DeepReadonly,
  type Err,
  type Ok,
  type Result,
} from '../../src/index';

describe('mini library types', () => {
  it('creates branded identifiers without widening them away', () => {
    type TaskId = Brand<string, 'TaskId'>;

    expectTypeOf(createBrand<string, 'TaskId'>('task-1')).toEqualTypeOf<TaskId>();
  });

  it('preserves nested readonly structure', () => {
    type Settings = DeepReadonly<{
      meta: {
        retries: number;
      };
      labels: string[];
    }>;

    expectTypeOf<Settings>().toEqualTypeOf<{
      readonly meta: {
        readonly retries: number;
      };
      readonly labels: readonly string[];
    }>();
  });

  it('keeps result generics through transformations', () => {
    expectTypeOf(ok(1)).toEqualTypeOf<Ok<number>>();
    expectTypeOf(err('offline')).toEqualTypeOf<Err<string>>();
    expectTypeOf(mapResult).parameter(0).toMatchTypeOf<Result<unknown, unknown>>();
    expectTypeOf<Result<string, string>>().toMatchTypeOf<Ok<string> | Err<string>>();
  });
});
