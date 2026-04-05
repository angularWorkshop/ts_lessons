import { resolveValue } from '../../src/index';

describe('resolveValue', () => {
  it('unwraps nested promises at runtime', async () => {
    const nestedPromise = Promise.resolve(Promise.resolve('typescript'));

    await expect(resolveValue(nestedPromise)).resolves.toBe('typescript');
  });

  it('passes through non-promise values', async () => {
    await expect(resolveValue(42)).resolves.toBe(42);
  });
});
