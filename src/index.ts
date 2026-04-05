export type SuccessResponse = {
  status: 'success';
  data: readonly { id: number; name: string }[];
};

export type ErrorResponse = {
  status: 'error';
  error: string;
};

export type ApiResponse = SuccessResponse | ErrorResponse;

export function isSuccess(response: ApiResponse): response is SuccessResponse {
  return response.status === 'success';
}

export function getResponseSummary(response: ApiResponse): string {
  if (isSuccess(response)) {
    return `Loaded ${response.data.length} users`;
  }

  return `Error: ${response.error}`;
}
