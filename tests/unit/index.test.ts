import { getUserWelcomeLabel, validateUserApiResponse } from '../../src/index';

describe('validateUserApiResponse', () => {
  it('returns success for a valid API payload', () => {
    const result = validateUserApiResponse({
      id: 'user-1',
      email: 'max@example.com',
      role: 'admin',
      profile: {
        displayName: 'Max',
        newsletter: true,
      },
    });

    expect(result.success).toBe(true);

    if (result.success) {
      expect(result.data.profile.displayName).toBe('Max');
      expect(result.data.role).toBe('admin');
    }
  });

  it('returns validation issues for an invalid API payload', () => {
    const result = validateUserApiResponse({
      id: 'user-2',
      email: 'not-an-email',
      role: 'super-admin',
      profile: {
        displayName: 'Kate',
        newsletter: true,
      },
    });

    expect(result.success).toBe(false);
  });
});

describe('getUserWelcomeLabel', () => {
  it('builds a welcome label for valid data', () => {
    expect(
      getUserWelcomeLabel({
        id: 'user-1',
        email: 'max@example.com',
        role: 'editor',
        profile: {
          displayName: 'Max',
          newsletter: false,
        },
      }),
    ).toBe('Max (editor)');
  });

  it('returns null for invalid data instead of throwing', () => {
    expect(
      getUserWelcomeLabel({
        id: 'user-1',
        email: 'broken-email',
        role: 'editor',
        profile: {
          displayName: 'Max',
          newsletter: false,
        },
      }),
    ).toBeNull();
  });
});
