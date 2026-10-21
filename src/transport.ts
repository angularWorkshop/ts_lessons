import type { Endpoint } from './index.js';
import type { User, Post } from './models.js';

export type ApiTransport = (url: string) => Promise<unknown>;

export class ApiError extends Error {
  constructor(message: string, public readonly code: number) {
    super(message);
  }
}

const users: User[] = [
  { id: 'user-1', name: 'Anna', role: 'student' },
  { id: 'user-2', name: 'Max', role: 'mentor' },
];
const posts: Post[] = [{ id: 'post-1', authorId: 'user-1', title: 'Learning TypeScript' }];

// A deterministic in-memory server: no accounts, network, or API keys needed.
export const localTransport: ApiTransport = async url => {
  const parsed = new URL(url, 'https://exercise.invalid');
  if (parsed.pathname === '/users') {
    const role = parsed.searchParams.get('role');
    return users.filter(user => !role || user.role === role).map(user => ({ ...user }));
  }
  if (parsed.pathname.startsWith('/users/')) {
    const id = decodeURIComponent(parsed.pathname.slice('/users/'.length));
    const user = users.find(user => user.id === id);
    if (!user) throw new ApiError('User not found', 404);
    return { ...user };
  }
  if (parsed.pathname === '/posts') {
    const authorId = parsed.searchParams.get('authorId');
    return posts.filter(post => !authorId || post.authorId === authorId).map(post => ({ ...post }));
  }
  throw new ApiError('Unknown endpoint', 404);
};

export function buildUrl<E extends keyof Endpoint>(endpoint: E, params: Endpoint[E]['params'] | undefined): string {
  if (endpoint === '/users/:id') {
    if (!params || !('id' in params) || !params.id) throw new ApiError('id is required', 400);
    return '/users/' + encodeURIComponent(params.id);
  }
  if (endpoint !== '/users' && endpoint !== '/posts') throw new ApiError('Unknown endpoint', 404);
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params || {})) {
    if (value !== undefined) query.set(key, String(value));
  }
  return endpoint + (query.size ? '?' + query.toString() : '');
}

const object = (value: unknown): value is Record<string, unknown> => typeof value === 'object' && value !== null;
const isUser = (value: unknown): value is User => object(value) && typeof value['id'] === 'string' &&
  typeof value['name'] === 'string' && (value['role'] === 'student' || value['role'] === 'mentor');
const isPost = (value: unknown): value is Post => object(value) && typeof value['id'] === 'string' &&
  typeof value['authorId'] === 'string' && typeof value['title'] === 'string';

export function decodePayload<E extends keyof Endpoint>(endpoint: E, payload: unknown): Endpoint[E]['response'] {
  const valid = endpoint === '/users/:id' ? isUser(payload) : Array.isArray(payload) &&
    (endpoint === '/users' ? payload.every(isUser) : payload.every(isPost));
  if (!valid) throw new ApiError('Invalid response payload', 502);
  // The unknown boundary is crossed only after the endpoint-specific guard.
  return payload as Endpoint[E]['response'];
}
