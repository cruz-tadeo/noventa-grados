import { Module } from '@nestjs/common';
import { UserController } from './infraestructure/controller/UserController';
import { UserService } from './application/service/UserService';
@Module({
	imports: [],
	controllers: [UserController],
	providers: [UserService],
	exports: [UserService]
})
export class UserModule {}
