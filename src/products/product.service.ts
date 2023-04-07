import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  product: Product[] = [];

  createProduct(title, price) {
    const id = Math.floor(Math.random() * 10000).toString();
    const newProduct = new Product(id, title, price);
    this.product.push(newProduct);
    return id;
  }

  getAllProduct() {
    return [...this.product];
  }

  getOneProduct(productId: string) {
    const productAll = this.product.find((prod) => {
      prod.id === productId;
    });
    if (!productAll) {
      throw new NotFoundException('id not found');
    }
    return { ...productAll };
  }

  //TODO: simplify below by having function to find the products
  updateProduct(id: string, title: string, price: number) {
    const indexOfProduct = this.product.findIndex((prod) => (prod.id = id));
    if (indexOfProduct === -1) {
      throw new NotFoundException('id not found');
    }
    this.product[indexOfProduct] = { id, title, price };
    return this.product[indexOfProduct];
  }

  deleteProduct(id: string) {
    const indexOfProduct = this.product.findIndex((prod) => (prod.id = id));
    if (indexOfProduct === -1) {
      throw new NotFoundException('id not found');
    }
    this.product.splice(indexOfProduct, 1);
  }
}
