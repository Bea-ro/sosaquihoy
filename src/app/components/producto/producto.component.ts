import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/models';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  @Input() products: Product[] = [];

  public selectedProduct(product: Product) {
    product.isSelected = !product.isSelected;
  }
}
