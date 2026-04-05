import { buildSession, fetchCourseMeta, logAction } from '../../src/index';

describe('types derived from functions', () => {
  it('keeps runtime behavior intact', async () => {
    expect(buildSession('user-1', 'student')).toEqual({
      userId: 'user-1',
      role: 'student',
      createdAt: new Date('2026-01-01T00:00:00.000Z'),
    });

    expect(logAction(['publish', 2])).toBe('publish:2');
    await expect(fetchCourseMeta()).resolves.toEqual({
      title: 'TypeScript',
      lessons: 29,
    });
  });
});
