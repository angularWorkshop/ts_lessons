import { getters } from '../../src/index';

describe('getters', () => {
  it('returns values through generated getter methods', () => {
    expect(getters.getUser()).toBe('Max');
    expect(getters.getCourse()).toBe('TypeScript');
    expect(getters.getIsOnline()).toBe(true);
  });
});
