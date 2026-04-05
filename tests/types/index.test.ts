import { expect, test } from 'vitest';
import { getTranslation, messages } from '../../src/index';

type ExpectedDictionary = {
  defaultLocale: string;
  fallbackMessage: string;
  [key: string]: string;
};

const messagesMustMatchExpectedShape: ExpectedDictionary = messages;
const getTranslationParametersMustBeTyped: [ExpectedDictionary, string] =
  null as unknown as Parameters<typeof getTranslation>;
const getTranslationReturnMustBeString: string = null as unknown as ReturnType<typeof getTranslation>;

void messagesMustMatchExpectedShape;
void getTranslationParametersMustBeTyped;
void getTranslationReturnMustBeString;

test('type contracts compile', () => {
  expect(true).toBe(true);
});
