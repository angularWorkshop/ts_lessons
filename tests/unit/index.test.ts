import { getTranslation, messages } from '../../src/index';

describe('index signatures exercise', () => {
  it('returns the requested translation when the key exists', () => {
    expect(getTranslation(messages, 'welcome')).toBe('Welcome');
  });

  it('returns the fallback message when the key is missing', () => {
    expect(getTranslation(messages, 'unknown')).toBe('Missing translation');
  });
});
