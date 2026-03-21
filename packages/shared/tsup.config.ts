import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'types/index': 'src/types/index.ts',
    'validators/index': 'src/validators/index.ts',
    'constants/index': 'src/constants/index.ts',
    'helpers/index': 'src/helpers/index.ts',
    'mocks/index': 'src/mocks/index.ts'
  },
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      composite: false,
      incremental: false
    }
  },
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: false
})
