import { ZodError } from 'zod';
import { createEnv, parseEnv } from '../../src/index';

describe('parseEnv', () => {
  it('parses and transforms a valid env source', () => {
    expect(
      parseEnv({
        DATABASE_URL: 'https://db.example.com',
        PORT: '3000',
        NODE_ENV: 'production',
        ENABLE_CACHE: 'true',
      }),
    ).toEqual({
      DATABASE_URL: 'https://db.example.com',
      PORT: 3000,
      NODE_ENV: 'production',
      ENABLE_CACHE: true,
    });
  });

  it('throws a ZodError for invalid env input', () => {
    expect(() =>
      parseEnv({
        DATABASE_URL: 'not-a-url',
        PORT: '3000',
        NODE_ENV: 'production',
        ENABLE_CACHE: 'true',
      }),
    ).toThrow(ZodError);
  });
});

describe('createEnv', () => {
  it('returns the fully typed env object', () => {
    expect(
      createEnv({
        DATABASE_URL: 'https://db.example.com',
        PORT: '8080',
        NODE_ENV: 'development',
        ENABLE_CACHE: 'false',
      }),
    ).toEqual({
      DATABASE_URL: 'https://db.example.com',
      PORT: 8080,
      NODE_ENV: 'development',
      ENABLE_CACHE: false,
    });
  });
});
