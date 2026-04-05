import { buildAcademyState, getDeepValue } from '../../src/index.js';

describe('DeepPick runtime helper', () => {
  it('reads nested string values by path', () => {
    const state = buildAcademyState();

    expect(getDeepValue(state, 'user.profile.address.city')).toBe('Minsk');
    expect(getDeepValue(state, 'user.profile.name')).toBe('Max');
  });

  it('reads nested numeric and boolean values by path', () => {
    const state = buildAcademyState();

    expect(getDeepValue(state, 'user.stats.completedLessons')).toBe(22);
    expect(getDeepValue(state, 'featureFlags.editor.vimMode')).toBe(true);
  });
});
