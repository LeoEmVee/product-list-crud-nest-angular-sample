import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  createProduct(product: Product) {}
  findAllProducts() {}
  findOneProduct(id: string) {}
  updateProduct(id: string, product: Product) {}
  deleteProduct(id: string) {}
}
