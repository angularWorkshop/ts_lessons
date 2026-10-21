import { describe, expect, it, vi } from 'vitest';
import { apiGet, ApiError, isSuccess } from '../../src/index.js';
import type { ApiTransport } from '../../src/index.js';

describe('typed API client behavior', () => {
  it('returns a success result for the default user list', async () => {
    const result = await apiGet('/users');
    expect(result).toEqual({ status: 'success', data: [
      { id: 'user-1', name: 'Anna', role: 'student' }, { id: 'user-2', name: 'Max', role: 'mentor' },
    ] });
  });
  it('uses optional query parameters', async () => {
    expect(await apiGet('/users', { role: 'mentor' })).toEqual({ status: 'success',
      data: [{ id: 'user-2', name: 'Max', role: 'mentor' }] });
  });
  it('loads one user by the required id', async () => {
    expect(await apiGet('/users/:id', { id: 'user-1' })).toEqual({ status: 'success',
      data: { id: 'user-1', name: 'Anna', role: 'student' } });
  });
  it('loads and filters posts using their own contract', async () => {
    expect(await apiGet('/posts', { authorId: 'unknown' })).toEqual({ status: 'success', data: [] });
    expect(await apiGet('/posts')).toEqual({ status: 'success',
      data: [{ id: 'post-1', authorId: 'user-1', title: 'Learning TypeScript' }] });
  });
  it('encodes a path id instead of inserting raw URL characters', async () => {
    const transport = vi.fn<ApiTransport>().mockResolvedValue({ id: 'a/b ?', name: 'Safe', role: 'student' });
    expect((await apiGet('/users/:id', { id: 'a/b ?' }, transport)).status).toBe('success');
    expect(transport).toHaveBeenCalledWith('/users/a%2Fb%20%3F');
  });
  it('keeps known API error codes without throwing', async () => {
    expect(await apiGet('/users/:id', { id: 'missing' })).toEqual({ status: 'error', error: 'User not found', code: 404 });
    const transport = vi.fn<ApiTransport>().mockRejectedValue(new ApiError('Unavailable', 503));
    expect(await apiGet('/users', undefined, transport)).toEqual({ status: 'error', error: 'Unavailable', code: 503 });
  });
  it('normalizes unexpected transport errors', async () => {
    const transport = vi.fn<ApiTransport>().mockRejectedValue(new Error('Connection failed'));
    expect(await apiGet('/users', {}, transport)).toEqual({ status: 'error', error: 'Connection failed', code: 500 });
  });
  it('normalizes thrown non-Error values', async () => {
    const transport = vi.fn<ApiTransport>().mockRejectedValue('offline');
    expect(await apiGet('/users', {}, transport)).toEqual({ status: 'error', error: 'Request failed', code: 500 });
  });
  it.each([null, {}, [{ id: 123, name: 'Bad', role: 'student' }]])('rejects malformed user payload %j', async payload => {
    const transport = vi.fn<ApiTransport>().mockResolvedValue(payload);
    expect(await apiGet('/users', {}, transport)).toEqual({ status: 'error', error: 'Invalid response payload', code: 502 });
  });
  it('isSuccess distinguishes both union members', () => {
    expect(isSuccess({ status: 'success', data: 0 })).toBe(true);
    expect(isSuccess({ status: 'error', error: 'No', code: 400 })).toBe(false);
  });
});
