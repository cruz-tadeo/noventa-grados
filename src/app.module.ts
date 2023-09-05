import { Module } from '@nestjs/common';
import { AuthModule } from './app/auth/auth.module';
import { EnvironmentConfigModule } from './database/infrastructure/environment/environment-config.module';

@Module({
	imports: [
		AuthModule,
		EnvironmentConfigModule
	],
})
export class AppModule {}
