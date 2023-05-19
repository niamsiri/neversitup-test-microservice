import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'test',
      global: true,
    }),
  ],
  providers: [RegisterService],
  controllers: [RegisterController],
})
export class RegisterModule {}
