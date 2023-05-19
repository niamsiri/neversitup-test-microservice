import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SchemaModule } from './database/schema.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, SchemaModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
