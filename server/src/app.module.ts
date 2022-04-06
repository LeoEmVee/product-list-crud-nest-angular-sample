import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      process.env.PRODUCT_LIST_CRUD_NEST_ANGULAR_SAMPLE_DB_URL,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
