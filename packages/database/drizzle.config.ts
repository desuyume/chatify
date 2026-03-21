import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

const databaseUrl: string = process.env['DATABASE_URL']

if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined')
}

export default defineConfig({
  schema: './src/schema/index.ts',
  out: './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: databaseUrl
  },
  verbose: true,
  strict: true
})
