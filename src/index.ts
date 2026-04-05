export interface TranslationDictionary {
  defaultLocale: string;
  fallbackMessage: string;
  [key: string]: string;
}

export const messages: TranslationDictionary = {
  defaultLocale: 'en',
  fallbackMessage: 'Missing translation',
  welcome: 'Welcome',
  goodbye: 'Goodbye',
};

export function getTranslation(dictionary: TranslationDictionary, key: string): string {
  return dictionary[key] ?? dictionary.fallbackMessage;
}
