import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Product } from 'src/database/schemas/product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {
    // this.createTestingData();
  }

  async getProduct() {
    return await this.productModel.find();
  }

  async getProductById(id: string) {
    return await this.productModel.findById(id);
  }

  async createTestingData() {
    const product = {
      name: 'test01',
      description: '1234',
      price: 1000,
      count: 100,
    };

    const createdProduct = new this.productModel(product);

    await createdProduct.save();
  }
}
