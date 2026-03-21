import nestjs from '@chatify/config-eslint/nestjs'

export default [
  ...nestjs,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]