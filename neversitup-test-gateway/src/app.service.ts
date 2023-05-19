import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('AUTH') private readonly authClient: ClientProxy,
    @Inject('USER') private readonly userClient: ClientProxy,
    @Inject('PRODUCT') private readonly productClient: ClientProxy,
    @Inject('ORDER') private readonly orderClient: ClientProxy,
  ) {}

  async login(loginRequest) {
    return this.authClient.send({ cmd: 'login' }, loginRequest);
  }

  async register(registerRequest) {
    return this.authClient.send({ cmd: 'register' }, registerRequest);
  }

  async getProfile(id) {
    return this.authClient.send({ cmd: 'get-profile' }, id);
  }

  async getProduct() {
    return this.productClient.send({ cmd: 'get-product' }, {});
  }

  async getProductById(id: string) {
    return this.productClient.send({ cmd: 'get-product-by-id' }, id);
  }

  async createOrder(newOrder) {
    return this.orderClient.send({ cmd: 'create-order' }, newOrder);
  }

  async cancelOrder(id: string) {
    return this.orderClient.send({ cmd: 'cancel-order-by-id' }, id);
  }

  async getOrderById(id: string) {
    return this.orderClient.send({ cmd: 'get-order-by-id' }, id);
  }

  async getOrderHistory(userId) {
    return this.orderClient.send({ cmd: 'get-order' }, userId);
  }
}
