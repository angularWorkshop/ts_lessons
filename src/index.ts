import type { User, Post } from './models.js';
import { ApiError, buildUrl, decodePayload, localTransport } from './transport.js';
import type { ApiTransport } from './transport.js';
export type { User, Post } from './models.js';
export type { ApiTransport } from './transport.js';
export { ApiError } from './transport.js';

export type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: string; code: number };

export type Endpoint = {
  '/users': { response: User[]; params: { role?: User['role'] } };
  '/users/:id': { response: User; params: { id: string } };
  '/posts': { response: Post[]; params: { authorId?: string } };
};

// This helper is supplied; the detail route needs an id, list routes do not.
export type ApiGetArgs<E extends keyof Endpoint> = E extends '/users/:id'
  ? [params: Endpoint[E]['params'], transport?: ApiTransport]
  : [params?: Endpoint[E]['params'], transport?: ApiTransport];

export function isSuccess<T>(response: ApiResponse<T>): response is Extract<ApiResponse<T>, { status: 'success' }> {
  return response.status === 'success';
}

export async function apiGet<E extends keyof Endpoint>(
  endpoint: E, ...args: ApiGetArgs<E>
): Promise<ApiResponse<Endpoint[E]['response']>> {
  const [params, transport = localTransport] = args;
  try {
    const url = buildUrl(endpoint, params);
    const payload = await transport(url);
    return { status: 'success', data: decodePayload(endpoint, payload) };
  } catch (error: unknown) {
    return { status: 'error', error: error instanceof Error ? error.message : 'Request failed',
      code: error instanceof ApiError ? error.code : 500 };
  }
}
