import { getPrimaryContact, users } from '../../src/index';

describe('arrays and tuples exercise', () => {
  it('keeps a typed list of users', () => {
    expect(users).toEqual([
      { id: 1, name: 'Max' },
      { id: 2, name: 'Anna' },
    ]);
  });

  it('returns the first user name inside a tuple', () => {
    expect(getPrimaryContact(users)).toEqual([true, 'Max']);
  });

  it('returns a fallback tuple for an empty list', () => {
    expect(getPrimaryContact([])).toEqual([false, 'No users']);
  });
});
