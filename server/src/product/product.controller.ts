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
  Param,
  NotFoundException,
  NotAcceptableException,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import mongoose from 'mongoose';

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
  async findAllProducts(@Res() res: any) {
    const allProducts = await this.productService.findAllProducts();
    console.log(res);
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

  @Get('/:productID')
  async findOneProduct(@Res() res: any, @Param('productID') productID: string) {
    if (!mongoose.isValidObjectId(productID))
      throw new NotAcceptableException('Please enter valid product id');
    const product = await this.productService.findOneProduct(productID);
    if (!product) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product found',
      'Product details': product,
    });
  }

  @Put('/update/:productID')
  async updateProduct(
    @Res() res: any,
    @Body() createProductDTO: CreateProductDTO,
    @Param('productID') productID: string,
  ) {
    if (!mongoose.isValidObjectId(productID))
      throw new NotAcceptableException('Please enter valid product id');
    const updatedProduct = await this.productService.updateProduct(
      productID,
      createProductDTO,
    );
    if (!updatedProduct) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product successfully updated',
      'New product details': updatedProduct,
    });
  }

  @Delete('/delete')
  async deleteProduct(@Res() res: any, @Query('productID') productID: string) {
    // We could have used @Param again instead of @Query. Here we use it just to show the alternative
    if (!mongoose.isValidObjectId(productID))
      throw new NotAcceptableException('Please enter valid product id');
    const deletedProduct = await this.productService.deleteProduct(productID);
    if (!deletedProduct) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product successfully deleted',
      'Deleted product': deletedProduct,
    });
  }
}
