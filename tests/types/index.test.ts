import { expect, test } from 'vitest';
import { filterValues, mapValues, type Predicate } from '../../src/index';

const mapValuesResultMustBeStringArray: string[] = mapValues([1, 2, 3], (value: number) => `${value}`);
const filterValuesResultMustStayNumberArray: number[] = filterValues([1, 2, 3], (value: number) => value > 1);
const predicateMustAcceptGenericValue: Predicate<number> = (value: number) => value > 0;

void mapValuesResultMustBeStringArray;
void filterValuesResultMustStayNumberArray;
void predicateMustAcceptGenericValue;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
