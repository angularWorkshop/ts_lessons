import { expect, test } from 'vitest';
import { getPrimaryContact, users } from '../../src/index';

type ExpectedUser = {
  id: number;
  name: string;
};

const usersMustBeReadonlyArray: readonly ExpectedUser[] = users;
const getPrimaryContactParametersMustUseReadonlyUsers: [readonly ExpectedUser[]] =
  null as unknown as Parameters<typeof getPrimaryContact>;
const getPrimaryContactReturnMustBeTuple: [boolean, string] = null as unknown as ReturnType<typeof getPrimaryContact>;

void usersMustBeReadonlyArray;
void getPrimaryContactParametersMustUseReadonlyUsers;
void getPrimaryContactReturnMustBeTuple;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
