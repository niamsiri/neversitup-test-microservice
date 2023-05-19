import * as bcrypt from 'bcrypt';

import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'src/database/schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class RegisterService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const checkUsernameDup = await this.userModel.findOne({
      username: createUserDto.username,
    });

    if (checkUsernameDup) {
      throw new BadRequestException('Error username duplicate!');
    }

    const bcryptPassword = await bcrypt.hashSync(
      createUserDto.password,
      await bcrypt.genSaltSync(10),
    );

    const newUser = new this.userModel({
      ...createUserDto,
      password: bcryptPassword,
    });

    const createdUser = await newUser.save();

    if (!createdUser) {
      throw new BadRequestException('Error can not create new user!');
    }

    const accessToken = await this.jwtService.sign({
      id: createdUser._id,
    });

    return accessToken;
  }
}
