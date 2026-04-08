import { z } from 'zod';

export type EnvSource = Record<string, string | undefined>;

export interface AppEnv {
  DATABASE_URL: string;
  PORT: number;
  NODE_ENV: 'development' | 'test' | 'production';
  ENABLE_CACHE: boolean;
}

export const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.coerce.number().int().positive(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  ENABLE_CACHE: z.enum(['true', 'false']).transform((value) => value === 'true'),
});

export function parseEnv(source: EnvSource): AppEnv {
  return envSchema.parse(source);
}

export function createEnv(source: EnvSource): AppEnv {
  return parseEnv(source);
}
