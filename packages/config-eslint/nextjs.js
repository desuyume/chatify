// @ts-check
import tseslint   from 'typescript-eslint'
import pluginNext from '@next/eslint-plugin-next'
import react      from './react.js'

export default tseslint.config(
  ...react,
  {
    plugins: {
      '@next/next': pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      '@next/next/no-html-link-for-pages': ['error', 'src/app'],
    },
  },
)