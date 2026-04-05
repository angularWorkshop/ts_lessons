export class BankAccount {
  public static createdCount = 0;

  public readonly id: string;

  private balance: number;

  constructor(id: string, initialBalance: number = 0) {
    this.id = id;
    this.balance = initialBalance;
    BankAccount.createdCount += 1;
  }

  public deposit(amount: number): number {
    this.balance += amount;

    return this.balance;
  }

  public withdraw(amount: number): number {
    if (amount > this.balance) {
      throw new Error('Insufficient funds');
    }

    this.balance -= amount;

    return this.balance;
  }

  public getBalance(): number {
    return this.balance;
  }
}
