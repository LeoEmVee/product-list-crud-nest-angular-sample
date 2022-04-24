import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  BASE_URL: string = environment.apiKey;

  constructor(private http: HttpClient) {}

  createProduct(product: Product) {}

  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/product`);
  }

  findOneProduct(id: string) {}
  updateProduct(id: string, product: Product) {}
  deleteProduct(id: string) {}
}
