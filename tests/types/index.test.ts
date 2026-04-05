import { expect, test } from 'vitest';
import { getResponseSummary, isSuccess, type ApiResponse, type SuccessResponse } from '../../src/index';

const isSuccessMustBeTypeGuard: (response: ApiResponse) => response is SuccessResponse = isSuccess;
const summaryMustReturnString: string = getResponseSummary({ status: 'error', error: 'Forbidden' });

void isSuccessMustBeTypeGuard;
void summaryMustReturnString;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
