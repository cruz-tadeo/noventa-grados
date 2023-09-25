import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule, {
		cors: true
	});
	const configService = app.get<ConfigService>(ConfigService);
	const globalPrefix = configService.get('APP_GLOBAL_PREFIX');
	const port = configService.get('APP_PORT');
	app.setGlobalPrefix(globalPrefix);
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
			forbidNonWhitelisted: true,
			transformOptions: {
				enableImplicitConversion: true
			}
		})
	);
	await app.listen(port);
}

bootstrap();
