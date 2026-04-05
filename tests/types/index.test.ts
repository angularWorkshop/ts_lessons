import { expectTypeOf } from 'vitest';
import {
  formatUserName,
  getUserById,
  getFirstElement,
  createConfig,
  type User,
  type AppConfig,
} from '../../src/index.js';

describe('strict type contracts', () => {
  it('formatUserName accepts User, not any', () => {
    expectTypeOf(formatUserName).parameter(0).not.toBeAny();
    expectTypeOf(formatUserName).parameter(0).toEqualTypeOf<User>();
  });

  it('getUserById may return undefined for missing users', () => {
    expectTypeOf(getUserById).returns.toEqualTypeOf<string | undefined>();
  });

  it('getFirstElement may return undefined for empty arrays', () => {
    expectTypeOf(getFirstElement).returns.toEqualTypeOf<string | undefined>();
  });

  it('createConfig returns AppConfig', () => {
    expectTypeOf(createConfig).returns.toEqualTypeOf<AppConfig>();
  });
});
