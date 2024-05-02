import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
              private readonly authService: AuthService
              ) {
    //Since passport local strategy by default expects username and password fields, we need to pass
    //The below config object to be able to pass payload email and data fields
    super({ 
            usernameField: 'email', 
            passwordField: 'password'
          });
  }

  async validate(
    email: string, password: string
  ): Promise<any> {
    const user = await this.authService.validateUser(email, password);
    return {...user};
  }
  
}