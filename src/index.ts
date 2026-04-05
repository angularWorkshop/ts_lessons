export interface ApiUser {
  readonly id: string;
  readonly email: string;
  readonly role: 'student' | 'mentor';
  readonly profile: {
    displayName: string;
    timezone?: string;
  };
  readonly tags: readonly string[];
}

export interface RetryConfig {
  readonly attempts: number;
  readonly backoffMs: number;
}

// TODO: unwrap nested promises until a non-promise value remains.
export type AsyncValue<T> = T extends Promise<infer Inner> ? Inner : T;

// TODO: remove top-level readonly modifiers.
export type Mutable<T> = {
  readonly [K in keyof T]: T[K];
};

// TODO: exclude protected keys from the patch shape.
export type UpdatePayload<T, ProtectedKeys extends keyof T = never> = {
  [K in keyof T]?: T[K];
};

export async function loadUser(id: string): Promise<ApiUser> {
  return {
    id,
    email: `${id}@edutec.dev`,
    role: 'student',
    profile: {
      displayName: 'Type Explorer',
      timezone: 'UTC',
    },
    tags: ['typescript', 'tests'],
  };
}

export function createRetryConfig(attempts: number, backoffMs: number): RetryConfig {
  return {
    attempts,
    backoffMs,
  };
}

export function createAuditLabel(user: Pick<ApiUser, 'email' | 'role'>): string {
  return `${user.email} (${user.role})`;
}
