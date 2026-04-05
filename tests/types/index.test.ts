import { expect, test } from 'vitest';
import { BankAccount } from '../../src/index';

const createdCountMustBeNumber: number = BankAccount.createdCount;
const account = new BankAccount('acc-5', 10);
const getBalanceReturnMustBeNumber: number = account.getBalance();
const bankAccountPublicKeysMustStayEncapsulated: 'deposit' | 'withdraw' | 'getBalance' | 'id' =
  null as unknown as keyof BankAccount;

// @ts-expect-error balance must not be publicly accessible
account.balance;

void createdCountMustBeNumber;
void getBalanceReturnMustBeNumber;
void bankAccountPublicKeysMustStayEncapsulated;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
