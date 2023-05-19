import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { RegisterService } from './register.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @MessagePattern({ cmd: 'register' })
  login(@Payload() createUserDto: CreateUserDto) {
    return this.registerService.register(createUserDto);
  }
}
