import { Global, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { createDatabase, Database } from '@chatify/database'

export const DB_TOKEN = Symbol('DB_TOKEN')

@Global()
@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: DB_TOKEN,
      useFactory: (config: ConfigService): Database => {
        return createDatabase(config.getOrThrow('DATABASE_URL'))
      },
      inject: [ConfigService]
    }
  ],
  exports: [DB_TOKEN]
})
export class DatabaseModule {}
