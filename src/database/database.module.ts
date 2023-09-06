import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/environment/environment-config.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvironmentConfigService } from './infrastructure/environment/environment-config.service';
import { getOptionsMongoDB } from './infrastructure/mongodb.options';

@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports:[EnvironmentConfigModule],
			inject: [EnvironmentConfigService],
			useFactory: getOptionsMongoDB
		}),
	]
})
export class ConnectionDatabaseModule {}
