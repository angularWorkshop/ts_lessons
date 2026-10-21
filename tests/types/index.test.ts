import { expect, expectTypeOf, test } from 'vitest';
import { apiGet, isSuccess } from '../../src/index.js';
import type { ApiResponse, Endpoint, User, Post } from '../../src/index.js';

// Compile-only examples: invalid API calls must never execute in Vitest.
function typeContracts(response: ApiResponse<User>) {
  expectTypeOf(apiGet('/users')).toEqualTypeOf<Promise<ApiResponse<User[]>>>();
  expectTypeOf(apiGet('/users/:id', { id: 'user-1' })).toEqualTypeOf<Promise<ApiResponse<User>>>();
  expectTypeOf(apiGet('/posts')).toEqualTypeOf<Promise<ApiResponse<Post[]>>>();
  expectTypeOf<Endpoint['/users']['response']>().toEqualTypeOf<User[]>();
  // @ts-expect-error Endpoint must be a known route.
  apiGet('/missing');
  // @ts-expect-error The detail route requires its id.
  apiGet('/users/:id');
  // @ts-expect-error id is a string.
  apiGet('/users/:id', { id: 12 });
  // @ts-expect-error role is not a posts query parameter.
  apiGet('/posts', { role: 'mentor' });
  // @ts-expect-error roles are restricted by the User model.
  apiGet('/users', { role: 'owner' });
  if (isSuccess(response)) {
    expectTypeOf(response.data).toEqualTypeOf<User>();
    // @ts-expect-error A success response has no error code.
    response.code;
  } else {
    expectTypeOf(response.code).toEqualTypeOf<number>();
    // @ts-expect-error An error response has no data.
    response.data;
  }
}
void typeContracts;
test('type contracts are checked by npm run typecheck', () => expect(true).toBe(true));
