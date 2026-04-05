import { validateConfig, type AppConfig } from '../../src/index';

describe('validateConfig', () => {
  it('returns true for a complete valid config', () => {
    const config: AppConfig = {
      apiUrl: 'https://api.edutec.work',
      timeout: 5000,
      debug: false,
    };

    expect(validateConfig(config)).toBe(true);
  });

  it('returns false when values violate basic runtime rules', () => {
    const config = {
      apiUrl: '',
      timeout: -1,
      debug: true,
    } as AppConfig;

    expect(validateConfig(config)).toBe(false);
  });
});
