import { NestFactory } from '@nestjs/core'
import type { NestExpressApplication } from '@nestjs/platform-express'
import { Logger, ValidationPipe } from '@nestjs/common'
import cookieParser from 'cookie-parser'

import { AppModule } from './app.module'
import { swaggerSetup } from './common/config/swagger.config'

async function bootstrap(): Promise<void> {
  const logger = new Logger('Bootstrap')
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const port = process.env['PORT'] ?? 8000

  app.setGlobalPrefix('api')

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )

  app.enableCors({
    credentials: true,
    origin: process.env['FRONTEND_URL'] ?? 'http://localhost:3000'
  })

  app.use(cookieParser())

  if (process.env['NODE_ENV'] === 'development') {
    swaggerSetup(app)
    logger.log(`Swagger: http://localhost:${port}/api/docs`)
  }

  await app.listen(port)
  logger.log(`Server running: http://localhost:${port}/api`)
}

bootstrap().catch((err: unknown) => {
  console.error(err)
  process.exit(1)
})
