import { defaultConfig, getResponseMessage } from '../../src/index';

describe('type vs interface exercise', () => {
  it('returns a success message with the item count', () => {
    expect(getResponseMessage({ status: 'success', data: ['TS', 'JS'] })).toBe('Loaded 2 items');
  });

  it('returns the API error message', () => {
    expect(getResponseMessage({ status: 'error', error: 'Unauthorized' })).toBe('Error: Unauthorized');
  });

  it('keeps a structured default config', () => {
    expect(defaultConfig).toEqual({
      apiBaseUrl: '/api',
      retryCount: 3,
      features: {
        darkMode: true,
        analytics: false,
      },
    });
  });
});
