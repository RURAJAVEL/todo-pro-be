import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/user.model';

@Injectable()
export class AuthService {

  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
      const user: CreateUserDto = await this.userService.findByEmail(email);
      if (!user) {
        throw new UnauthorizedException("No user found with this email");
      }
      if(user && user.password === password) {
        delete user.password;
        return user;
      }
      else{
        throw new BadRequestException("Incorrect password");
      }
    }

    async login(user: User) {
      const payload = { username: user.name, email: user.email, userId: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }

}
