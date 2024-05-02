import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {

  private configService: ConfigService;

  constructor(configService: ConfigService) {
    super({
      //To extract token from the bearer token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_ACCESS_SECRET'),
    });
    this.configService = configService;
  }

  getConfigService(){
    return this.configService;
  }

  async validate(payload: any) {
    return { userId: payload.userId, username: payload.username, email: payload.email };
  }
  
}