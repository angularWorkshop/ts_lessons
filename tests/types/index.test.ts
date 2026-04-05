import { expect, test } from 'vitest';
import { add, sumAll } from '../../src/index';

const addNumbersMustReturnNumber: number = add(1, 2);
const addStringsMustReturnString: string = add('a', 'b');
const sumAllParametersMustBeNumbersOnly: number[] = null as unknown as Parameters<typeof sumAll>;
const sumAllReturnMustBeNumber: number = null as unknown as ReturnType<typeof sumAll>;

void addNumbersMustReturnNumber;
void addStringsMustReturnString;
void sumAllParametersMustBeNumbersOnly;
void sumAllReturnMustBeNumber;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
