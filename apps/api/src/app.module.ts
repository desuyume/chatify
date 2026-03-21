import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MulterModule } from '@nestjs/platform-express'

import { UsersModule } from './common/modules/users/users.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ['../../.env', '.env'] }),
    MulterModule.register(),
    UsersModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {}
