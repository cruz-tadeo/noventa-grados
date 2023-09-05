import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/environment/environment-config.module';
@Module({
	imports: [
		EnvironmentConfigModule
	]
})
export class ConnectionDatabaseModule {}
