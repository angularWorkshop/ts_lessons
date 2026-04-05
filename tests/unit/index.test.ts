import { appConfig, getApiBaseUrl } from '../../src/index';

describe('appConfig', () => {
  it('keeps runtime config values intact', () => {
    expect(getApiBaseUrl()).toBe('https://api.edutec.work');
    expect(appConfig.retryCount).toBe(3);
    expect(appConfig.theme).toBe('dark');
  });
});
