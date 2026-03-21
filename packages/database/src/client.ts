import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import * as schema from './schema/index'

export type Database = ReturnType<typeof createDatabase>

export function createDatabase(url: string) {
  const client = postgres(url, {
    max: 10,
    idle_timeout: 20,
    connect_timeout: 10
  })

  return drizzle(client, {
    schema,
    logger: process.env['NODE_ENV'] === 'development'
  })
}
