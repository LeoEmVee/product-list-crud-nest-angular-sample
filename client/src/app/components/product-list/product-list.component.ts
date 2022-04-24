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

  products: Product[] | undefined;

  ngOnInit(): void {
    this.findAllProducts();
  }

  findAllProducts(): void {
    this.productService.findAllProducts().subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }
}
