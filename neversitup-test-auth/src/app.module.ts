import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';
import { DatabaseModule } from './database/database.module';
import { SchemaModule } from './database/schema.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseModule,
    SchemaModule,
    RegisterModule,
    LoginModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
