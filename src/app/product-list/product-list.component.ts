import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../core/product.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
  viewProductDetails(productId: number): void {
    this.router.navigate(['/products', productId]);
  }
}
