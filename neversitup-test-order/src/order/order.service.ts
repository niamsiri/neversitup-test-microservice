import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from 'src/database/schemas/order.schema';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name)
    private readonly orderModel: Model<Order>,
  ) {}

  async createOrder(createOrder) {
    const newOrder = new this.orderModel(createOrder);
    return await newOrder.save();
  }

  async getOrderHistory() {
    return await this.orderModel.find();
  }

  async getOrderById(params) {
    return await this.orderModel.findById(params.id);
  }

  async cancelOrder(params) {
    return await this.orderModel.findByIdAndUpdate(params.id, {
      status: 'CANCEL',
    });
  }
}
