import {
  formatUserName,
  getUserById,
  getFirstElement,
  ApiClient,
  BaseLogger,
  PrefixLogger,
  createConfig,
  type User,
} from '../../src/index.js';

const users: User[] = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob', email: 'bob@example.com' },
];

describe('formatUserName', () => {
  it('uppercases user name', () => {
    expect(formatUserName({ id: '1', name: 'Alice' })).toBe('ALICE');
  });
});

describe('getUserById', () => {
  it('returns name for existing user', () => {
    expect(getUserById(users, '1')).toBe('Alice');
  });

  it('returns fallback for missing user', () => {
    expect(getUserById(users, 'missing')).toBe('Unknown');
  });
});

describe('getFirstElement', () => {
  it('returns first element', () => {
    expect(getFirstElement(['hello', 'world'])).toBe('hello');
  });

  it('returns undefined for empty array', () => {
    expect(getFirstElement([])).toBeUndefined();
  });
});

describe('ApiClient', () => {
  it('builds request URL', () => {
    const client = new ApiClient('https://api.example.com');
    expect(client.request('/users')).toBe('https://api.example.com/users');
  });
});

describe('loggers', () => {
  it('BaseLogger formats message', () => {
    expect(new BaseLogger().log('test')).toBe('[LOG] test');
  });

  it('PrefixLogger uses custom prefix', () => {
    expect(new PrefixLogger('APP').log('start')).toBe('[APP] start');
  });
});

describe('createConfig', () => {
  it('creates config with port', () => {
    expect(createConfig(3000).port).toBe(3000);
  });

  it('does not include debug key when not needed', () => {
    expect('debug' in createConfig(3000)).toBe(false);
  });
});
