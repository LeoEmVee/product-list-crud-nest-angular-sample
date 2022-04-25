import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  update: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params['id'];
    if (params)
      this.productService.findOneProduct(`${params}`).subscribe({
        next: (res) => {
          this.product = res;
          this.update = true;
        },
        error: (err) => console.log(err),
      });
  }

  createProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: (res) => this.router.navigate(['/']),
      error: (err) => console.log(err),
    });
  }

  updateProduct() {
    delete this.product.createdAt;
    this.productService
      .updateProduct(`${this.product._id}`, this.product)
      .subscribe({
        next: (res) => {
          this.router.navigate(['/product']);
        },
        error: (err) => console.log(err),
      });
  }
}
