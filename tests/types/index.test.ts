import { expect, test } from 'vitest';
import { adminUser, printUser } from '../../src/index';

type ExpectedUser = {
  id: number;
  name: string;
  email?: string;
};

type ExpectedAdmin = ExpectedUser & {
  readonly permissions: readonly string[];
};

const printUserParametersMustBeTyped: [ExpectedUser] = null as unknown as Parameters<typeof printUser>;
const printUserReturnMustBeString: string = null as unknown as ReturnType<typeof printUser>;
const adminUserMustMatchExpectedShape: ExpectedAdmin = adminUser;

void printUserParametersMustBeTyped;
void printUserReturnMustBeString;
void adminUserMustMatchExpectedShape;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
