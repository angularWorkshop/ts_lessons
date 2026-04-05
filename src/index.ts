export type Theme = 'light' | 'dark';

export type AppConfig = {
  apiUrl: string;
  theme: Theme;
  retryCount: number;
};

export const appConfig = {
  apiUrl: 'https://api.edutec.work',
  theme: 'dark',
  retryCount: 3,
} as const satisfies AppConfig;

export function getApiBaseUrl(): string {
  return appConfig.apiUrl;
}
