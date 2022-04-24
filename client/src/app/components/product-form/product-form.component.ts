import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    imageURL: '',
  };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  submitProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
    });
  }
}
