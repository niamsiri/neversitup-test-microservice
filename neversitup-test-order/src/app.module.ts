import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './order/order.module';
import { DatabaseModule } from './database/database.module';
import { SchemaModule } from './database/schema.module';

@Module({
  imports: [DatabaseModule, SchemaModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
