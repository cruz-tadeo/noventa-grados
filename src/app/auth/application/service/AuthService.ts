import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
	// constructor(private readonly siteRespository: SiteRepository) {}

	public async hello() {
		return 'HEllo WORLD'
	}
	
}
