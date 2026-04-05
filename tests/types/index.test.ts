import { expect, test } from 'vitest';
import { formatUser, isAdult, sumPrices, type User } from '../../src/index';

// These assignments intentionally surface direct TypeScript mismatch errors.
const sumPricesParametersMustBeReadonlyNumberArray: [readonly number[]] =
  null as unknown as Parameters<typeof sumPrices>;
const sumPricesReturnMustBeNumber: number = null as unknown as ReturnType<typeof sumPrices>;

const formatUserParametersMustMatchUser: [User] = null as unknown as Parameters<typeof formatUser>;
const formatUserReturnMustBeString: string = null as unknown as ReturnType<typeof formatUser>;

const isAdultParametersMustBeNumber: [number] = null as unknown as Parameters<typeof isAdult>;
const isAdultReturnMustBeBoolean: boolean = null as unknown as ReturnType<typeof isAdult>;

void sumPricesParametersMustBeReadonlyNumberArray;
void sumPricesReturnMustBeNumber;
void formatUserParametersMustMatchUser;
void formatUserReturnMustBeString;
void isAdultParametersMustBeNumber;
void isAdultReturnMustBeBoolean;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
