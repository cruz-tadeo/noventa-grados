import { Module } from '@nestjs/common';
import { AuthModule } from './app/auth/auth.module';
import { EnvironmentConfigModule } from './database/infrastructure/environment/environment-config.module';
import { ChatGateway } from './app/chat/chat.gateway';
import { ConnectionDatabaseModule } from './database/database.module';

@Module({
	imports: [
		AuthModule,
		ConnectionDatabaseModule,
		EnvironmentConfigModule
	],
	providers: [ChatGateway]
})
export class AppModule {}
