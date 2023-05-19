import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  ValidationPipe,
  ClassSerializerInterceptor,
  UseInterceptors,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller()
@UseInterceptors(ClassSerializerInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  async login(@Body() loginRequest) {
    return this.appService.login(loginRequest);
  }

  @Post('/register')
  register(@Body() registerRequest) {
    return this.appService.register(registerRequest);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return this.appService.getProfile(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/order-history')
  getOrderHistory(@Request() req) {
    return this.appService.getOrderHistory(req.user.id);
  }

  @Get('/product')
  getProduct() {
    return this.appService.getProduct();
  }

  @Get('/product/:id')
  getProductById(@Param() id: string) {
    return this.appService.getProductById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/order')
  createOrder(@Body() newOrder, @Request() req) {
    return this.appService.createOrder({ ...newOrder, userId: req.user.id });
  }

  @Post('/order-cancel/:id')
  cancelOrder(@Param() id: string) {
    return this.appService.cancelOrder(id);
  }

  @Get('/order/:id')
  getOrderById(@Param() id: string) {
    return this.appService.getOrderById(id);
  }
}
