import type { User, Post } from './models.js';
import { ApiError, buildUrl, decodePayload, localTransport } from './transport.js';
import type { ApiTransport } from './transport.js';
export type { User, Post } from './models.js';
export type { ApiTransport } from './transport.js';
export { ApiError } from './transport.js';

export type ApiResponse<T> =
  | { status: 'success'; data: T }
  | { status: 'error'; error: string; code: number };

// TODO: replace each unknown response with the matching User/Post model.
export type Endpoint = {
  '/users': { response: unknown; params: { role?: User['role'] } };
  '/users/:id': { response: unknown; params: { id: string } };
  '/posts': { response: unknown; params: { authorId?: string } };
};

export type ApiGetArgs<E extends keyof Endpoint> = E extends '/users/:id'
  ? [params: Endpoint[E]['params'], transport?: ApiTransport]
  : [params?: Endpoint[E]['params'], transport?: ApiTransport];

export function isSuccess<T>(response: ApiResponse<T>): response is Extract<ApiResponse<T>, { status: 'success' }> {
  // TODO: narrow the discriminated union using its status.
  return false;
}

export async function apiGet<E extends keyof Endpoint>(
  endpoint: E, ...args: ApiGetArgs<E>
): Promise<ApiResponse<Endpoint[E]['response']>> {
  // TODO: use buildUrl, the supplied/default transport, and decodePayload.
  // Convert ApiError to its code; other thrown values become code 500.
  void [endpoint, args, ApiError, buildUrl, decodePayload, localTransport];
  return { status: 'error', error: 'Not implemented', code: 501 };
}
