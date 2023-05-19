import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'orders',
  timestamps: true,
})
export class Order extends Document {
  @Prop({
    required: true,
  })
  productId: string;

  @Prop({
    required: true,
  })
  userId: string;

  @Prop({
    required: true,
  })
  sumPrice: number;

  @Prop({
    default: 0,
  })
  count: number;

  @Prop({
    enum: ['PENDING', 'PROCESS', 'CANCEL', 'SUCCESS'],
    default: 'PENDING',
  })
  status: string;
}

const OrderSchema = SchemaFactory.createForClass(Order);

export { OrderSchema };
