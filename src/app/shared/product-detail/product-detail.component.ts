import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../core/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProducts().subscribe((products) => {
        this.product = products.find((p) => p.id === +id);
      });
    }
  }
}
