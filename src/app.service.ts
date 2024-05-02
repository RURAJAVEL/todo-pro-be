import { Injectable, OnModuleInit } from "@nestjs/common";
import { UserService } from "./feature-modules/users/user.service";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService implements OnModuleInit {

    constructor(
                private userService: UserService,
                private configService: ConfigService
            ) { }

    async onModuleInit() {
        const testUser = {
            email: this.configService.get<string>('TEST_EMAIL'),
            password: this.configService.get<string>('TEST_PASSWORD'),
            name: this.configService.get<string>('TEST_NAME')
        };
        const user = await this.userService.findByEmail(testUser.email);
        if(!user){
            await this.userService.createUser(testUser);
        }
    }

}