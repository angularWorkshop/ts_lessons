export type ApiResponse = {
  status: string;
  data?: string[];
  error?: string;
};

export type AppConfig = {
  apiBaseUrl: string;
  retryCount: number;
};

export const defaultConfig: AppConfig = {
  apiBaseUrl: '/api',
  retryCount: 3,
};

export const selectionReason = {
  apiResponse: 'unknown',
  appConfig: 'unknown',
} as const;

export function getResponseMessage(response: ApiResponse): string {
  return response.status;
}
