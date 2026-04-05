import { parseJson, getLength, double, sum, clamp, describeStream } from '../../src/index.js';

describe('parseJson', () => {
  it('parses valid JSON', () => {
    expect(parseJson('{"a":1}')).toEqual({ a: 1 });
  });
});

describe('getLength', () => {
  it('returns length of a string', () => {
    expect(getLength('hello')).toBe(5);
  });
});

describe('double', () => {
  it('doubles a number', () => {
    expect(double(21)).toBe(42);
  });
});

describe('sum', () => {
  it('sums an array', () => {
    expect(sum([1, 2, 3])).toBe(6);
  });
});

describe('clamp', () => {
  it('clamps within range', () => {
    expect(clamp(15, 0, 10)).toBe(10);
    expect(clamp(-5, 0, 10)).toBe(0);
    expect(clamp(5, 0, 10)).toBe(5);
  });
});

describe('describeStream', () => {
  it('describes a readable stream', () => {
    const fakeStream = { readable: true } as any;
    expect(describeStream(fakeStream)).toBe('readable');
  });
});
