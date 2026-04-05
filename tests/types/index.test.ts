import { expect, test } from 'vitest';
import { navigateTo, routes, type RoutePath } from '../../src/index';

const firstRoute: '/' = routes[0];
const validRoute: RoutePath = '/courses';
const navigationMessage: string = navigateTo('/profile');

void firstRoute;
void validRoute;
void navigationMessage;

// @ts-expect-error invalid routes must be rejected.
const invalidRoute: RoutePath = '/settings';

void invalidRoute;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
