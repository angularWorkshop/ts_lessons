import { expectTypeOf } from 'vitest';
import {
  getUserWelcomeLabel,
  userApiResponseSchema,
  validateUserApiResponse,
  type UserApiResponse,
  type UserApiValidationResult,
} from '../../src/index';

describe('zod type inference', () => {
  it('infers the API payload type from the schema', () => {
    const example: UserApiResponse = {
      id: 'user-1',
      email: 'max@example.com',
      role: 'viewer',
      profile: {
        displayName: 'Max',
        newsletter: true,
      },
    };

    expectTypeOf(example).toEqualTypeOf<UserApiResponse>();
    expectTypeOf(example.profile.newsletter).toEqualTypeOf<boolean>();
  });

  it('types validation helpers correctly', () => {
    expectTypeOf(userApiResponseSchema).toBeObject();
    expectTypeOf(validateUserApiResponse({})).toEqualTypeOf<UserApiValidationResult>();
    expectTypeOf(getUserWelcomeLabel).returns.toEqualTypeOf<string | null>();
  });
});
