import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { usersProviders } from './users.providers';

@Module({
  controllers: [UserController],
  providers: [UserService, ...usersProviders],
  exports: [UserService]
})
export class UserModule {};
