export type SuccessResponse = {
  status: 'success';
  data: readonly { id: number; name: string }[];
};

export type ErrorResponse = {
  status: 'error';
  error: string;
};

export type ApiResponse = SuccessResponse | ErrorResponse;

export function isSuccess(response: ApiResponse): boolean {
  return response.status === 'success';
}

export function getResponseSummary(response: ApiResponse): string {
  return response.status;
}
