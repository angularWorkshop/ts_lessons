import { asDeepReadonly, buildFeatureConfig } from '../../src/index.js';

describe('DeepReadonly runtime behavior', () => {
  it('returns the same object shape at runtime', () => {
    const config = buildFeatureConfig();
    const readonlyConfig = asDeepReadonly(config);

    expect(readonlyConfig).toEqual(config);
    expect(readonlyConfig.flags.beta).toBe(true);
    expect(readonlyConfig.owners[0]?.contacts.email).toBe('owner-1@edutec.dev');
  });

  it('keeps functions callable', () => {
    const readonlyConfig = asDeepReadonly(buildFeatureConfig());

    expect(readonlyConfig.onInit()).toBe('ready');
  });
});
