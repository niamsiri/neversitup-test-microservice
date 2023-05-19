import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { OrderService } from './order.service';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'get-order' })
  getOrderHistory() {
    return this.orderService.getOrderHistory();
  }

  @MessagePattern({ cmd: 'create-order' })
  createOrder(newOrder) {
    return this.orderService.createOrder(newOrder);
  }

  @MessagePattern({ cmd: 'cancel-order-by-id' })
  cancelOrder(params) {
    return this.orderService.cancelOrder(params);
  }

  @MessagePattern({ cmd: 'get-order-by-id' })
  getOrderById(params) {
    return this.orderService.getOrderById(params);
  }
}
