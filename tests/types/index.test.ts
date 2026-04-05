import { expect, test } from 'vitest';
import { filterUsersByStatus, Status, users } from '../../src/index';

type ExpectedUserRecord = {
  id: number;
  name: string;
  status: Status;
};

const usersMustUseExpectedStatusShape: readonly ExpectedUserRecord[] = users;
const filterUsersByStatusParametersMustBeTyped: [readonly ExpectedUserRecord[], Status] =
  null as unknown as Parameters<typeof filterUsersByStatus>;
const filterUsersByStatusReturnMustBeArray: ExpectedUserRecord[] =
  null as unknown as ReturnType<typeof filterUsersByStatus>;

void usersMustUseExpectedStatusShape;
void filterUsersByStatusParametersMustBeTyped;
void filterUsersByStatusReturnMustBeArray;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
