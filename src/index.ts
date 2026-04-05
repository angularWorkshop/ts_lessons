export type ClassMethod<This, Args extends unknown[], Return> = (
  this: This,
  ...args: Args
) => Return;

export function serializeArg(value: unknown): string {
  const serialized = JSON.stringify(value);

  return serialized ?? String(value);
}

export function Log() {
  return function <This extends { logs: string[] }, Args extends unknown[], Return>(
    _target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<ClassMethod<This, Args, Return>>,
  ): TypedPropertyDescriptor<ClassMethod<This, Args, Return>> {
    const originalMethod = descriptor.value;

    if (!originalMethod) {
      return descriptor;
    }

    descriptor.value = function (this: This, ...args: Args): Return {
      this.logs.push(`${String(propertyKey)}()`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

export function Memoize() {
  return function <This, Args extends unknown[], Return>(
    _target: object,
    _propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<ClassMethod<This, Args, Return>>,
  ): TypedPropertyDescriptor<ClassMethod<This, Args, Return>> {
    return descriptor;
  };
}

export class PricingService {
  public readonly logs: string[] = [];
  private exchangeLookupCount = 0;

  @Log()
  public formatInvoice(customerId: string, amounts: readonly number[]): string {
    const total = amounts.reduce((sum, amount) => sum + amount, 0);

    return `${customerId}:${total.toFixed(2)}`;
  }

  @Memoize()
  public convertTotal(amount: number, rate: number): number {
    this.exchangeLookupCount += 1;

    return Number((amount * rate).toFixed(2));
  }

  public getExchangeLookupCount(): number {
    return this.exchangeLookupCount;
  }
}
