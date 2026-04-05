import { expect, test } from 'vitest';
import { describeUnknownValue, isStudentActive, studentAge, studentName } from '../../src/index';

const studentNameMustBeString: string = studentName;
const studentAgeMustBeNumber: number = studentAge;
const isStudentActiveMustBeBoolean: boolean = isStudentActive;

const describeUnknownValueParametersMustBeUnknown: [unknown] =
  null as unknown as Parameters<typeof describeUnknownValue>;
const describeUnknownValueReturnMustBeString: string = null as unknown as ReturnType<typeof describeUnknownValue>;

void studentNameMustBeString;
void studentAgeMustBeNumber;
void isStudentActiveMustBeBoolean;
void describeUnknownValueParametersMustBeUnknown;
void describeUnknownValueReturnMustBeString;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
