import { z } from 'zod';

export type EnvSource = Record<string, string | undefined>;

export interface AppEnv {
  DATABASE_URL: string;
  PORT: number;
  NODE_ENV: 'development' | 'test' | 'production';
  ENABLE_CACHE: boolean;
}

export const envSchema = z.object({
  DATABASE_URL: z.string(),
  PORT: z.string(),
  NODE_ENV: z.enum(['development', 'test', 'production']),
  ENABLE_CACHE: z.enum(['true', 'false']),
});

export function parseEnv(source: EnvSource): AppEnv {
  return envSchema.parse(source) as unknown as AppEnv;
}

export function createEnv(source: EnvSource): AppEnv {
  return parseEnv(source);
}
