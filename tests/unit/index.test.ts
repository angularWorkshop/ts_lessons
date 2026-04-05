import { PricingService } from '../../src/index';

describe('@Log', () => {
  it('records method calls with serialized arguments', () => {
    const service = new PricingService();

    expect(service.formatInvoice('client-1', [10, 15, 5])).toBe('client-1:30.00');
    expect(service.logs).toEqual(['formatInvoice("client-1", [10,15,5])']);
  });
});

describe('@Memoize', () => {
  it('reuses the cached result for identical arguments', () => {
    const service = new PricingService();

    expect(service.convertTotal(10, 1.25)).toBe(12.5);
    expect(service.convertTotal(10, 1.25)).toBe(12.5);
    expect(service.getExchangeLookupCount()).toBe(1);
  });

  it('keeps cache per instance and per argument set', () => {
    const firstService = new PricingService();
    const secondService = new PricingService();

    expect(firstService.convertTotal(20, 1.1)).toBe(22);
    expect(firstService.convertTotal(25, 1.1)).toBe(27.5);
    expect(secondService.convertTotal(20, 1.1)).toBe(22);

    expect(firstService.getExchangeLookupCount()).toBe(2);
    expect(secondService.getExchangeLookupCount()).toBe(1);
  });
});
