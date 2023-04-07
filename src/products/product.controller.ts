import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class productController {
  constructor(public productService: ProductService) {}

  @Post()
  createProducts(
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
  ): { id: string } {
    const id = this.productService.createProduct(prodTitle, prodPrice);
    return { id: id };
  }

  @Get()
  getAllProducts(): Product[] {
    return this.productService.getAllProduct();
  }

  @Get(':id')
  getOneProduct(@Param('id') prodId: string): any {
    return this.productService.getOneProduct(prodId);
  }

  @Put()
  updateProducts(
    @Body('id') prodId: string,
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
  ): Product {
    return this.productService.updateProduct(prodId, prodTitle, prodPrice);
  }

  @Delete(':id')
  deleteProduct(@Param('id') prodId: string): { message: string } {
    this.productService.deleteProduct(prodId);
    return { message: `${prodId} deleted successfully` };
  }
}
