import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.findAllProducts();
  }

  findAllProducts(): void {
    this.productService.findAllProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
