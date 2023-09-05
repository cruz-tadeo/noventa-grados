import { Module } from '@nestjs/common';
import { AuthController } from './infraestructure/controller/AuthController';
import { AuthService } from './application/service/AuthService';
@Module({
	imports: [],
	controllers: [AuthController],
	providers: [AuthService],
	exports: [AuthService]
})
export class AuthModule {}
