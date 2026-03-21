// @ts-check
import tseslint        from 'typescript-eslint'
import pluginReact     from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import base            from './base.js'

export default tseslint.config(
  ...base,
  {
    plugins: {
      'react':       pluginReact,
      'react-hooks': pluginReactHooks,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      'react/react-in-jsx-scope':      'off',
      'react/prop-types':              'off',
      'react/self-closing-comp':       'error',
      'react/jsx-no-duplicate-props':  'error',
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-array-index-key':      'warn',
      'react-hooks/rules-of-hooks':    'error',
      'react-hooks/exhaustive-deps':   'warn',
    },
  },
)