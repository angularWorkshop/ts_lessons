import { adminUser, printUser } from '../../src/index';

describe('user model exercise', () => {
  it('prints name and email when email exists', () => {
    expect(printUser({ id: 1, name: 'Max', email: 'max@example.com' })).toBe('Max <max@example.com>');
  });

  it('prints fallback text when email is missing', () => {
    expect(printUser({ id: 2, name: 'Anna' })).toBe('Anna <no email>');
  });

  it('keeps readonly admin permissions data', () => {
    expect(adminUser.permissions).toEqual(['manage-users', 'publish-course']);
  });
});
