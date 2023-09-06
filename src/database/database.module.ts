import { Module } from '@nestjs/common';
import { EnvironmentConfigModule } from './infrastructure/environment/environment-config.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
	imports: [
		MongooseModule.forRoot('mongodb://Hostinger:$tr0ngPa$$w0rD@86.38.203.219:27017/noventa-grados?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.6'),
		EnvironmentConfigModule
	]
})
export class ConnectionDatabaseModule {}
