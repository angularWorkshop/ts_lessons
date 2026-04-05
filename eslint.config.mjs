import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
    },
  },
  {
    ignores: ['dist/', 'node_modules/', 'tests/', 'vitest.config.ts'],
  },
);
