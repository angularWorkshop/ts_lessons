import { z } from 'zod';

export const userApiResponseSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  role: z.enum(['admin', 'editor', 'viewer']),
  profile: z.object({
    displayName: z.string(),
    newsletter: z.boolean(),
  }),
});

export type UserApiResponse = z.infer<typeof userApiResponseSchema>;

export type UserApiValidationResult = ReturnType<typeof userApiResponseSchema.safeParse>;

export function validateUserApiResponse(input: unknown): UserApiValidationResult {
  return userApiResponseSchema.safeParse(input);
}

export function getUserWelcomeLabel(input: unknown): string | null {
  const parsed = validateUserApiResponse(input);

  if (!parsed.success) {
    return null;
  }

  return `${parsed.data.profile.displayName} (${parsed.data.role})`;
}
