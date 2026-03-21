// @ts-check
import tseslint from 'typescript-eslint'
import base     from './base.js'

export default tseslint.config(
  ...base,
  {
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type':  'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-floating-promises':           'error',
      '@typescript-eslint/no-misused-promises':            'error',
      '@typescript-eslint/require-await':                  'error',
      '@typescript-eslint/no-unsafe-assignment':           'warn',
      '@typescript-eslint/no-unsafe-member-access':        'warn',
      '@typescript-eslint/no-unsafe-return':               'warn',
    },
  },
)