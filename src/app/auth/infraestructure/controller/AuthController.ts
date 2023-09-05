import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from '../../application/service/AuthService';

@Controller('auth')
export class AuthController {
	constructor(private readonly siteService: AuthService) {}

	@Get()
	public async getSiteWithLanding() {
		return await this.siteService.hello();
	}
}
