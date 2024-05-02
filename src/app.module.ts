import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './feature-modules/auth/auth.module';
import { TodoModule } from './feature-modules/todo/todo.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './feature-modules/users/user.module';
import { DatabaseModule } from './feature-modules/database/database.module';
import { AppService } from './app.service';

@Module({
  imports: [
            AuthModule, 
            TodoModule,
            ConfigModule.forRoot({ 
              isGlobal: true
            }),
            UserModule,
            DatabaseModule
          ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
