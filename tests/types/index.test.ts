import { expect, test } from 'vitest';
import { type AppConfig, validateConfig } from '../../src/index';

const validConfig: AppConfig = {
  apiUrl: 'https://api.edutec.work',
  timeout: 5000,
  debug: false,
};

const validationResult: boolean = validateConfig(validConfig);

void validConfig;
void validationResult;

// @ts-expect-error config must require all known keys.
const missingConfigKey: AppConfig = {
  apiUrl: 'https://api.edutec.work',
  timeout: 5000,
};

// @ts-expect-error extra keys must be rejected.
const invalidExtraKey: AppConfig = {
  apiUrl: 'https://api.edutec.work',
  timeout: 5000,
  debug: false,
  mode: 'test',
};

void missingConfigKey;
void invalidExtraKey;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
