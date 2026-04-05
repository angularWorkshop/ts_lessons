export type ApiResponse =
  | { status: 'success'; data: readonly string[] }
  | { status: 'error'; error: string }
  | { status: 'loading' };

export interface AppConfig {
  apiBaseUrl: string;
  retryCount: number;
  features: {
    darkMode: boolean;
    analytics: boolean;
  };
}

export const defaultConfig: AppConfig = {
  apiBaseUrl: '/api',
  retryCount: 3,
  features: {
    darkMode: true,
    analytics: false,
  },
};

export const selectionReason = {
  apiResponse: 'type',
  appConfig: 'interface',
} as const;

export function getResponseMessage(response: ApiResponse): string {
  switch (response.status) {
    case 'success':
      return `Loaded ${response.data.length} items`;
    case 'error':
      return `Error: ${response.error}`;
    case 'loading':
      return 'Loading...';
  }
}
