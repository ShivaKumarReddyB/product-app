import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() viewDetails = new EventEmitter<number>();

  onCardClick() {
    this.viewDetails.emit(this.product.id);
  }
}
