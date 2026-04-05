import { expectTypeOf } from 'vitest';
import { Log, Memoize, PricingService, serializeArg } from '../../src/index';

describe('decorator typing', () => {
  it('keeps decorated method return types intact', () => {
    const service = new PricingService();

    expectTypeOf(service.formatInvoice('client-1', [10, 20])).toEqualTypeOf<string>();
    expectTypeOf(service.convertTotal(10, 1.25)).toEqualTypeOf<number>();
    expectTypeOf(service.logs).toEqualTypeOf<string[]>();
  });

  it('types helper functions', () => {
    expectTypeOf(serializeArg('client-1')).toEqualTypeOf<string>();
    expectTypeOf(Log()).toBeFunction();
    expectTypeOf(Memoize()).toBeFunction();
  });
});
