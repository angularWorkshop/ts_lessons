import { add, multiply, clamp, range, createStats } from '../../src/index.js';

describe('math-utils runtime', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  it('multiplies two numbers', () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(0, 100)).toBe(0);
  });

  it('clamps a value within bounds', () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(15, 0, 10)).toBe(10);
  });

  it('generates a range of numbers', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(0, 10, 3)).toEqual([0, 3, 6, 9]);
  });

  it('returns empty range when start >= end', () => {
    expect(range(5, 5)).toEqual([]);
    expect(range(10, 3)).toEqual([]);
  });

  it('computes stats for a number array', () => {
    const stats = createStats([4, 2, 7, 1, 9]);
    expect(stats.min).toBe(1);
    expect(stats.max).toBe(9);
    expect(stats.mean).toBeCloseTo(4.6);
    expect(stats.count).toBe(5);
  });

  it('computes stats for a single-element array', () => {
    const stats = createStats([42]);
    expect(stats.min).toBe(42);
    expect(stats.max).toBe(42);
    expect(stats.mean).toBe(42);
    expect(stats.count).toBe(1);
  });
});
