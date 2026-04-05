import { expect, test } from 'vitest';
import { appConfig, type AppConfig } from '../../src/index';

const configMatchesContract: AppConfig = appConfig;
const themeMustStayLiteral: 'dark' = appConfig.theme;
const apiUrlMustStayLiteral: 'https://api.edutec.work' = appConfig.apiUrl;

void configMatchesContract;
void themeMustStayLiteral;
void apiUrlMustStayLiteral;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
