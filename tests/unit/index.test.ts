import { createAuditLabel, createRetryConfig, loadUser } from '../../src/index.js';

describe('loadUser', () => {
  it('returns a mocked API user', async () => {
    await expect(loadUser('user-42')).resolves.toEqual({
      id: 'user-42',
      email: 'user-42@edutec.dev',
      role: 'student',
      profile: {
        displayName: 'Type Explorer',
        timezone: 'UTC',
      },
      tags: ['typescript', 'tests'],
    });
  });
});

describe('createRetryConfig', () => {
  it('returns a retry config object', () => {
    expect(createRetryConfig(3, 500)).toEqual({
      attempts: 3,
      backoffMs: 500,
    });
  });
});

describe('createAuditLabel', () => {
  it('formats the email and role', () => {
    expect(
      createAuditLabel({
        email: 'user-42@edutec.dev',
        role: 'mentor',
      })
    ).toBe('user-42@edutec.dev (mentor)');
  });
});
