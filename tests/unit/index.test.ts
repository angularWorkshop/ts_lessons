import { BankAccount } from '../../src/index';

describe('bank account exercise', () => {
  it('updates the balance through deposit and withdraw', () => {
    const account = new BankAccount('acc-1', 100);

    expect(account.deposit(50)).toBe(150);
    expect(account.withdraw(20)).toBe(130);
    expect(account.getBalance()).toBe(130);
  });

  it('throws when there are not enough funds', () => {
    const account = new BankAccount('acc-2', 40);

    expect(() => account.withdraw(100)).toThrow('Insufficient funds');
  });

  it('tracks the number of created accounts', () => {
    const before = BankAccount.createdCount;

    new BankAccount('acc-3', 0);
    new BankAccount('acc-4', 0);

    expect(BankAccount.createdCount).toBe(before + 2);
  });
});
