import { expect, test } from 'vitest';
import { asDeepReadonly, buildFeatureConfig, type DeepReadonly, type FeatureConfig } from '../../src/index.js';

const readonlyConfig = asDeepReadonly(buildFeatureConfig());
const readonlyShape: DeepReadonly<FeatureConfig> = readonlyConfig;
const initResult: string = readonlyConfig.onInit();

void readonlyShape;
void initResult;

// @ts-expect-error top-level fields must be readonly.
readonlyConfig.name = 'Changed';

// @ts-expect-error nested object fields must also become readonly.
readonlyConfig.flags.beta = false;

// @ts-expect-error items inside arrays must also become readonly.
readonlyConfig.owners[0].contacts.email = 'changed@edutec.dev';

test('DeepReadonly keeps functions callable', () => {
  expect(true).toBe(true);
});
