import { CreateProductDTO } from './dto/product.dto';
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createProduct(
    @Res() res: any,
    @Body() createProductDTO: CreateProductDTO,
  ) {
    const newProduct = await this.productService.createProduct(
      createProductDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Product successfully created',
      'Product details': newProduct,
    });
  }

  @Get('/')
  async findAllProducts(@Res() res) {
    const allProducts = await this.productService.findAllProducts();
    return res.status(HttpStatus.OK).json({
      message:
        'Products successfully retrieved. ' +
        `${
          (allProducts.length && 'Here they are:') ||
          'But currently there are none'
        }`,
      Products: allProducts,
    });
  }
}
