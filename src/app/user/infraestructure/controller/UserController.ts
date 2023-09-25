import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from '../../application/service/UserService';

@Controller('auth')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get()
	public async getSiteWithLanding() {
		return await this.userService.hello()
	}
}
