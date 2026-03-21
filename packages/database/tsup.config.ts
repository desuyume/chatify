import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'schema/index': 'src/schema/index.ts',
    client: 'src/client.ts'
  },
  format: ['esm', 'cjs'],
  dts: {
    compilerOptions: {
      composite: false,
      incremental: false
    }
  },
  clean: true,
  sourcemap: true,
  treeshake: true,
  splitting: false,
  external: ['postgres', 'drizzle-orm']
})
