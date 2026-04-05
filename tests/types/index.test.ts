import { expect, test } from 'vitest';
import { formatUser, sumPrices, type MyParameters, type MyReturnType } from '../../src/index';

const userLabelReturn: string = null as unknown as MyReturnType<typeof formatUser>;
const userLabelParameters: [string, number] = null as unknown as MyParameters<typeof formatUser>;
const sumPricesReturn: number = null as unknown as MyReturnType<typeof sumPrices>;
const sumPricesParameters: number[] = null as unknown as MyParameters<typeof sumPrices>;

void userLabelReturn;
void userLabelParameters;
void sumPricesReturn;
void sumPricesParameters;

// @ts-expect-error Utility must reject non-function types.
type InvalidReturnType = MyReturnType<string>;

void (null as unknown as InvalidReturnType);

test('type contracts compile', () => {
  expect(true).toBe(true);
});
