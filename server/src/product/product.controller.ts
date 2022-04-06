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

@Controller('product')
export class ProductController {
  @Post('/create')
  createPost(@Res() res: any, @Body() createProductDTO: CreateProductDTO) {
    return res.status(HttpStatus.OK).json({
      message: 'Received',
    });
  }
}
