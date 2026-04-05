import '../../src/index.js';
import { getEnv } from '../../src/index.js';

describe('Array.prototype.unique', () => {
  it('removes duplicate numbers', () => {
    expect([1, 2, 2, 3, 3, 3].unique()).toEqual([1, 2, 3]);
  });

  it('removes duplicate strings', () => {
    expect(['a', 'b', 'a', 'c'].unique()).toEqual(['a', 'b', 'c']);
  });

  it('returns empty array for empty input', () => {
    expect([].unique()).toEqual([]);
  });

  it('preserves order of first occurrences', () => {
    expect([3, 1, 2, 1, 3].unique()).toEqual([3, 1, 2]);
  });

  it('does not break existing Array methods', () => {
    const arr = [1, 2, 3];
    expect(arr.map((x) => x * 2)).toEqual([2, 4, 6]);
    expect(arr.filter((x) => x > 1)).toEqual([2, 3]);
  });
});

describe('global ENV', () => {
  it('has correct mode', () => {
    expect(getEnv().mode).toBe('development');
  });

  it('has version string', () => {
    expect(getEnv().version).toBe('1.0.0');
  });

  it('has debug flag', () => {
    expect(getEnv().debug).toBe(true);
  });

  it('is accessible via globalThis', () => {
    expect(globalThis.ENV).toBeDefined();
    expect(globalThis.ENV.mode).toBe('development');
  });
});
