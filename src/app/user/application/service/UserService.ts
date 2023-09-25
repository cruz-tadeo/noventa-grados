import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
	// constructor(private readonly siteRespository: SiteRepository) {}

	public async hello() {
		return 'HEllo WORLD'
	}
	
}
