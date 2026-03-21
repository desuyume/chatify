import nextjs from '@chatify/config-eslint/nextjs'

export default [
  ...nextjs,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    ignores: ['jest.setup.js', 'jest.config.js']
  }
]
