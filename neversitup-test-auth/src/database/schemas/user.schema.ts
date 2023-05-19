import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  timestamps: true,
})
export class User extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  username: string;

  @Prop({
    default: null,
  })
  password: string;

  @Prop({
    required: true,
  })
  name: string;
}

const UserSchema = SchemaFactory.createForClass(User);

export { UserSchema };
