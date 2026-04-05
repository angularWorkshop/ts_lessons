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
      const serializedArgs = args.map((arg) => serializeArg(arg)).join(', ');
      this.logs.push(`${String(propertyKey)}(${serializedArgs})`);
      return originalMethod.apply(this, args);
    };

    return descriptor;
  };
}

export function Memoize() {
  const cacheByInstance = new WeakMap<object, Map<string, unknown>>();

  return function <This, Args extends unknown[], Return>(
    _target: object,
    _propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<ClassMethod<This, Args, Return>>,
  ): TypedPropertyDescriptor<ClassMethod<This, Args, Return>> {
    const originalMethod = descriptor.value;

    if (!originalMethod) {
      return descriptor;
    }

    descriptor.value = function (this: This, ...args: Args): Return {
      const instance = this as object;
      const cacheKey = JSON.stringify(args);
      const instanceCache = cacheByInstance.get(instance) ?? new Map<string, unknown>();

      if (!cacheByInstance.has(instance)) {
        cacheByInstance.set(instance, instanceCache);
      }

      if (instanceCache.has(cacheKey)) {
        return instanceCache.get(cacheKey) as Return;
      }

      const result = originalMethod.apply(this, args);
      instanceCache.set(cacheKey, result);

      return result;
    };

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
