import { MongooseModuleOptions } from '@nestjs/mongoose';
import { EnvironmentConfigService } from './environment/environment-config.service';
//'mongodb://noventa_user:qwerty@86.38.203.219:27017/?directConnection=true&authSource=admin&appName=mongosh+1.10.6'

export const getOptionsMongoDB = (
	config: EnvironmentConfigService
): MongooseModuleOptions  => ({
	uri: `mongodb://${config.getDatabaseUser()}:${config.getDatabasePassword()}@${config.getDatabaseHost()}:${config.getDatabasePort()}/?directConnection=true&authSource=admin&appName=mongosh+1.10.6`,
	user: config.getDatabaseUser(),
	pass: config.getDatabasePassword()
} as MongooseModuleOptions) 