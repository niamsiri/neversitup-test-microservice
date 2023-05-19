import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'products',
  timestamps: true,
})
export class Product extends Document {
  @Prop({
    required: true,
  })
  name: string;

  @Prop()
  description: string;

  @Prop({
    required: true,
  })
  price: number;

  @Prop({
    default: 0,
  })
  count: number;
}

const ProductSchema = SchemaFactory.createForClass(Product);

export { ProductSchema };
