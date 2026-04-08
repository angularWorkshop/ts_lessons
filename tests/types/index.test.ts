import { expectTypeOf } from 'vitest';
import { z } from 'zod';

import {
  createRouteName,
  createRouter,
  defineRoute,
  type Brand,
  type FrameworkError,
  type NavigationSuccess,
  type Result,
  type RouteParams,
  type RoutePath,
} from '../../src/index';

type UserId = Brand<string, 'UserId'>;

const routes = {
  home: defineRoute({ path: '/' }),
  userDetails: defineRoute({
    path: '/users/:userId',
    params: z.object({
      userId: z.string().min(1).transform((value) => value as UserId),
    }),
    search: z.object({
      tab: z.enum(['overview', 'settings']).optional(),
    }),
  }),
};

const router = createRouter(routes);

describe('capstone router types', () => {
  it('infers branded route params from Zod outputs', () => {
    expectTypeOf<RouteParams<(typeof routes)['userDetails']>>().toEqualTypeOf<{
      userId: UserId;
    }>();
  });

  it('preserves route names and result wrappers in public APIs', () => {
    expectTypeOf(createRouteName('userDetails')).toEqualTypeOf<Brand<'userDetails', 'RouteName'>>();
    expectTypeOf(
      router.navigate('userDetails', {
        params: { userId: 'user-1' },
        search: { tab: 'overview' },
      }),
    ).toMatchTypeOf<
      Result<NavigationSuccess<'userDetails', (typeof routes)['userDetails']>, FrameworkError>
    >();
    expectTypeOf(router.buildPath('home', { params: {} })).toMatchTypeOf<
      Result<RoutePath, FrameworkError>
    >();
  });

  it('rejects invalid route names and param shapes at compile time', () => {
    // @ts-expect-error unknown route name must not compile
    router.navigate('profile', { params: {} });

    // @ts-expect-error userId is required
    router.navigate('userDetails', { params: {} });
  });
});
