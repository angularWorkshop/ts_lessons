import { navigateTo, routes } from '../../src/index';

describe('routes', () => {
  it('navigates only using known route strings at runtime', () => {
    expect(routes).toEqual(['/', '/courses', '/profile']);
    expect(navigateTo('/courses')).toBe('Navigating to /courses');
  });
});
