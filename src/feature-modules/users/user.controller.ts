import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserDto } from './dto/create-user.dto';
import { AccessTokenGuard } from '../../guards/access-token.guard';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseGuards(AccessTokenGuard)
export class UserController {

  constructor(private userService: UserService) { }

  @Post()
  create(@Body() userDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(userDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.getUser(Number(id));
  }

  @Put(':id') 
  update(@Param('id') id: string, @Body() userDto: UpdateUserDto): Promise<[number, User[]]> {
    return this.userService.updateUser(Number(id), userDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<number> {
    return this.userService.deleteUser(Number(id));
  }

}
