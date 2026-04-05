import { err, getUserNameUppercase, ok, parseJsonResult } from '../../src/index.js';

describe('Result factories', () => {
  it('matches ok values', () => {
    expect(ok(2).match({ ok: (value) => value * 2, err: () => 0 })).toBe(4);
  });

  it('matches err values', () => {
    expect(err('boom').match({ ok: () => 'ok', err: (error) => error })).toBe('boom');
  });
});

describe('parseJsonResult', () => {
  it('returns ok for valid JSON', () => {
    const result = parseJsonResult('{"id":"user-1","name":"Max"}');

    expect(result.match({ ok: (value) => value, err: () => null })).toEqual({
      id: 'user-1',
      name: 'Max',
    });
  });

  it('returns err for invalid JSON instead of throwing', () => {
    expect(parseJsonResult('{broken').match({ ok: () => 'ok', err: (error) => error })).toBe(
      'Invalid JSON',
    );
  });
});

describe('Result chaining', () => {
  it('maps valid payloads without try/catch', () => {
    expect(
      getUserNameUppercase('{"id":"user-1","name":"Max"}').match({
        ok: (value) => value,
        err: (error) => error,
      }),
    ).toBe('MAX');
  });
});
