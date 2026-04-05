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
const retryConfigMustMatchExpected: ExpectedRetryConfig = null as unknown as EditableRetryConfig;
const retryConfigMustStayExact: EditableRetryConfig = null as unknown as ExpectedRetryConfig;
const userPatchMustMatchExpected: ExpectedUserPatch = null as unknown as SafeUserPatch;
const userPatchMustStayExact: SafeUserPatch = null as unknown as ExpectedUserPatch;

editableRetryConfig.attempts = 3;

// @ts-expect-error protected keys must not appear in the update payload.
const invalidPatch: SafeUserPatch = { id: 'user-99' };

void invalidPatch;
void retryConfigMustMatchExpected;
void retryConfigMustStayExact;
void userPatchMustMatchExpected;
void userPatchMustStayExact;

test('AsyncValue unwraps nested promises', () => {
  expectTypeOf<LoadedUser>().toEqualTypeOf<ApiUser>();
});

test('Mutable removes top-level readonly modifiers', () => {
  expectTypeOf(editableRetryConfig.attempts).toEqualTypeOf<number>();
});

test('UpdatePayload excludes protected keys', () => {
  expectTypeOf<keyof SafeUserPatch>().toEqualTypeOf<'profile' | 'role' | 'tags'>();
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
