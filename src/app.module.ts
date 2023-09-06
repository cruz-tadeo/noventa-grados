import { Module } from '@nestjs/common';
import { AuthModule } from './app/auth/auth.module';
import { EnvironmentConfigModule } from './database/infrastructure/environment/environment-config.module';
import { ChatGateway } from './app/chat/chat.gateway';

@Module({
	imports: [
		AuthModule,
		EnvironmentConfigModule
	],
	providers: [ChatGateway],
})
export class AppModule {}
