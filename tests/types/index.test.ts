import { expectTypeOf } from 'vitest';
import { createEnv, envSchema, parseEnv, type AppEnv, type EnvSource } from '../../src/index';

describe('env typing', () => {
  it('exposes a typed env object', () => {
    const source: EnvSource = {
      DATABASE_URL: 'https://db.example.com',
      PORT: '3000',
      NODE_ENV: 'test',
      ENABLE_CACHE: 'true',
    };

    expectTypeOf(createEnv(source)).toEqualTypeOf<AppEnv>();
  });

  it('types the exported helpers and schema', () => {
    expectTypeOf(envSchema).toBeObject();
    expectTypeOf(parseEnv).returns.toEqualTypeOf<AppEnv>();
  });
});
