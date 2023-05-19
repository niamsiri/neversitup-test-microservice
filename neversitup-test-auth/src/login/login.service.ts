import * as bcrypt from 'bcrypt';

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../database/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';

import { LoginDto } from './dto/login.dto';
@Injectable()
export class LoginService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const user = await this.userModel.findOne({
      username: loginDto.username,
    });

    const errorMessage = 'username or password not correct!';

    if (!user) {
      throw new UnauthorizedException(errorMessage);
    }

    const comparePassword = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!comparePassword) {
      throw new UnauthorizedException(errorMessage);
    }

    const accessToken = await this.jwtService.sign({
      id: user._id,
    });

    return accessToken;
  }
}
