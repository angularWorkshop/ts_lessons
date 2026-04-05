import { expect, test } from 'vitest';
import { defaultConfig, getResponseMessage, selectionReason, type AppConfig } from '../../src/index';

type ExpectedApiResponse =
  | { status: 'success'; data: readonly string[] }
  | { status: 'error'; error: string }
  | { status: 'loading' };

type ExpectedConfig = {
  apiBaseUrl: string;
  retryCount: number;
  features: {
    darkMode: boolean;
    analytics: boolean;
  };
};

declare module '../../src/index' {
  interface AppConfig {
    environment: 'dev' | 'prod';
  }
}

const getResponseMessageParametersMustUseUnion: [ExpectedApiResponse] =
  null as unknown as Parameters<typeof getResponseMessage>;
const defaultConfigMustMatchExpectedShape: ExpectedConfig = defaultConfig;
const augmentedConfigMustCompile: AppConfig = {
  ...defaultConfig,
  environment: 'dev',
};
const selectionReasonMustBeExplicit: {
  readonly apiResponse: 'type';
  readonly appConfig: 'interface';
} = selectionReason;

void getResponseMessageParametersMustUseUnion;
void defaultConfigMustMatchExpectedShape;
void augmentedConfigMustCompile;
void selectionReasonMustBeExplicit;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
