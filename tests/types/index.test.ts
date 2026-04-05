import { expectTypeOf, test } from 'vitest';
import {
  createAuditLabel,
  createRetryConfig,
  loadUser,
  type ApiUser,
  type AsyncValue,
  type Mutable,
  type RetryConfig,
  type UpdatePayload,
} from '../../src/index.js';

type LoadedUser = AsyncValue<Promise<Promise<ApiUser>>>;
type EditableRetryConfig = Mutable<RetryConfig>;
type SafeUserPatch = UpdatePayload<ApiUser, 'id' | 'email'>;
type ExpectedRetryConfig = {
  attempts: number;
  backoffMs: number;
};
type ExpectedUserPatch = {
  role?: 'student' | 'mentor';
  profile?: {
    displayName: string;
    timezone?: string;
  };
  tags?: readonly string[];
};

const editableRetryConfig: EditableRetryConfig = {
  attempts: 2,
  backoffMs: 250,
};

editableRetryConfig.attempts = 3;

// @ts-expect-error protected keys must not appear in the update payload.
const invalidPatch: SafeUserPatch = {
  id: 'user-99',
};

void invalidPatch;

test('AsyncValue unwraps nested promises', () => {
  expectTypeOf<LoadedUser>().toEqualTypeOf<ApiUser>();
});

test('Mutable removes top-level readonly modifiers', () => {
  expectTypeOf<EditableRetryConfig>().toEqualTypeOf<ExpectedRetryConfig>({
    attempts: 1,
    backoffMs: 100,
  });
});

test('UpdatePayload excludes protected keys', () => {
  expectTypeOf<SafeUserPatch>().toEqualTypeOf<ExpectedUserPatch>({
    role: 'student',
    profile: {
      displayName: 'Type Explorer',
      timezone: 'UTC',
    },
    tags: ['typescript'],
  });
});

test('runtime helpers keep their public contracts', () => {
  expectTypeOf(loadUser('user-1')).toEqualTypeOf<Promise<ApiUser>>();
  expectTypeOf(createRetryConfig(1, 100)).toEqualTypeOf<RetryConfig>();
  expectTypeOf(
    createAuditLabel({
      email: 'user-1@edutec.dev',
      role: 'student',
    })
  ).toBeString();
});
