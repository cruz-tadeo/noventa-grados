import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DatabaseConfig } from './environment-config.entity';

@Injectable()
export class EnvironmentConfigService implements DatabaseConfig {
	constructor(private configService: ConfigService) {}

	getDatabaseHost(): string {
		return this.configService.get<string>('DATABASE_HOST');
	}

	getDatabasePort(): number {
		return this.configService.get<number>('DATABASE_PORT');
	}

	getDatabaseUser(): string {
		return this.configService.get<string>('DATABASE_USER');
	}

	getDatabasePassword(): string {
		return this.configService.get<string>('DATABASE_PASSWORD');
	}
}
