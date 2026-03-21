import base from '@chatify/config-eslint/base'

export default [
	...base,
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
]