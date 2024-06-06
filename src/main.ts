import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('api');
    app.enableCors();
    app.useGlobalPipes(new ValidationPipe());

    const docs = new DocumentBuilder()
        .setTitle('Api documentation')
        .setDescription('Documentation for nika-test api')
        .setVersion('0.0.1')
        .addBearerAuth()
        .addSecurityRequirements('bearer')
        .build();

    const document = SwaggerModule.createDocument(app, docs);

    SwaggerModule.setup('api/docs', app, document);

    const configService = app.get(ConfigService);

    const port = configService.get<string>('APP_PORT');
    const host = configService.get<string>('APP_HOST');

    await app.listen(port);

    Logger.log(`Server is listening on url ${host}:${port}`);
}

bootstrap();
