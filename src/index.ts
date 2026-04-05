export interface TranslationDictionary {
  defaultLocale: string;
  [key: string]: string | number;
}

export const messages: TranslationDictionary = {
  defaultLocale: 'en',
  fallbackMessage: 'Missing translation',
  welcome: 'Welcome',
  goodbye: 'Goodbye',
};

export function getTranslation(dictionary: TranslationDictionary, key: string): string {
  return dictionary.defaultLocale;
}
