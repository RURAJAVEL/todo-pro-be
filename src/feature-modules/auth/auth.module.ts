import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { LocalStrategy } from './strategies/local.strategy';
import { AccessTokenStrategy } from './strategies/access-token.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
            UserModule,
            PassportModule,
            JwtModule.registerAsync({
              imports: [ConfigModule],
              inject: [ConfigService],
              useFactory: async (configService: ConfigService) => {
                return {
                secret: configService.get<string>('JWT_ACCESS_SECRET'),
                signOptions: { expiresIn: configService.get<string>('JWT_ACCESS_TTL') }
                };
              }
            })
          ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, AccessTokenStrategy]
})
export class AuthModule {}
