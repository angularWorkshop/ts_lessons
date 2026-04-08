import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { z } from 'zod';

import {
  createRouter,
  defineRoute,
  isErr,
  isOk,
  type Brand,
} from '../../src/index';

type UserId = Brand<string, 'UserId'>;

const routes = {
  home: defineRoute({ path: '/' }),
  userDetails: defineRoute({
    path: '/users/:userId',
    params: z.object({
      userId: z.string().min(1).transform((value) => value as UserId),
    }),
    search: z.object({
      tab: z.enum(['overview', 'settings']).optional(),
    }),
  }),
};

describe('capstone router runtime', () => {
  it('builds a path from typed params and optional search data', () => {
    const router = createRouter(routes);
    const result = router.buildPath('userDetails', {
      params: { userId: 'user-42' },
      search: { tab: 'settings' },
    });

    expect(isOk(result)).toBe(true);
    expect(result).toEqual({
      ok: true,
      value: '/users/user-42?tab=settings',
    });
  });

  it('wraps invalid route input in Err', () => {
    const router = createRouter(routes);
    const result = router.navigate('userDetails', {
      params: { userId: '' },
      search: { tab: 'overview' },
    });

    expect(isErr(result)).toBe(true);
    expect(result).toEqual({
      ok: false,
      error: {
        code: 'VALIDATION_ERROR',
        message: 'Invalid params for route "userDetails"',
        issues: ['userId: Too small: expected string to have >=1 characters'],
      },
    });
  });

  it('returns a typed navigation record with logging', () => {
    const router = createRouter(routes);
    const result = router.navigate('userDetails', {
      params: { userId: 'user-99' },
      search: { tab: 'overview' },
    });

    expect(isOk(result)).toBe(true);
    expect(result).toEqual({
      ok: true,
      value: {
        id: 'userDetails:/users/user-99?tab=overview',
        name: 'userDetails',
        path: '/users/user-99?tab=overview',
        params: {
          userId: 'user-99',
        },
        search: {
          tab: 'overview',
        },
      },
    });
    expect(router.getLogs()).toEqual(['buildPath:2', 'navigate:2']);
  });

  it('caches repeated path builds', () => {
    const router = createRouter(routes);

    router.buildPath('userDetails', {
      params: { userId: 'user-42' },
      search: { tab: 'settings' },
    });
    router.buildPath('userDetails', {
      params: { userId: 'user-42' },
      search: { tab: 'settings' },
    });

    expect(router.getStats()).toEqual({
      pathBuilds: 1,
    });
  });
});

describe('capstone package manifest', () => {
  it('defines dual-mode package entrypoints and prepack validation', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
    ) as {
      exports?: {
        '.': {
          import?: string;
          require?: string;
          types?: string;
        };
      };
      scripts?: {
        prepack?: string;
      };
    };

    expect(packageJson.exports?.['.']).toEqual({
      types: './dist/index.d.ts',
      import: './dist/index.js',
      require: './dist/index.cjs',
    });
    expect(packageJson.scripts?.prepack).toBe('npm run check && npm run build');
  });
});
