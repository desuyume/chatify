// @ts-check
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/.next/**',
      '**/coverage/**',
      '**/*.config.ts',
      '**/*.config.mjs',
      '**/*.config.js',
    ],
  },
  {
    extends: [...tseslint.configs.recommended],
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', {
        argsIgnorePattern:         '^_',
        varsIgnorePattern:         '^_',
        caughtErrorsIgnorePattern: '^_',
      }],
      '@typescript-eslint/consistent-type-imports': ['error', {
        prefer:   'type-imports',
        fixStyle: 'inline-type-imports',
      }],
      '@typescript-eslint/no-explicit-any':             'error',
      '@typescript-eslint/no-non-null-assertion':       'warn',
      '@typescript-eslint/no-empty-object-type':        'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      'no-console':       ['warn', { allow: ['warn', 'error'] }],
      'prefer-const':     'error',
      'no-var':           'error',
      'eqeqeq':           ['error', 'always'],
      'no-throw-literal': 'error',
    },
  },
)