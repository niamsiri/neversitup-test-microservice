import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'get-product' })
  getProduct() {
    return this.productService.getProduct();
  }

  @MessagePattern({ cmd: 'get-product-by-id' })
  getProductById(id: string) {
    return this.productService.getProductById(id);
  }
}
