export type Theme = 'light' | 'dark';

export type AppConfig = {
  apiUrl: string;
  theme: Theme;
  retryCount: number;
};

export const appConfig: AppConfig = {
  apiUrl: 'https://api.edutec.work',
  theme: 'dark',
  retryCount: 3,
};

export function getApiBaseUrl(): string {
  return appConfig.apiUrl;
}
