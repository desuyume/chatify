import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { INestApplication } from '@nestjs/common'

export const swaggerSetup = (app: INestApplication) => {
  const configSwagger = new DocumentBuilder()
    .setTitle('Chatify')
    .setDescription("API for project by name 'Chatify'")
    .addBearerAuth()
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app, configSwagger)

  SwaggerModule.setup('api/v1', app, document)
}
