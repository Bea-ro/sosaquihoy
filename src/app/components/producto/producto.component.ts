import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '../../models/models';
import { products } from '../../data/products';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent {
  @Input() products: Product[] = [];
  isSelected: boolean = false;
  public selectedProduct() {
    this.isSelected = !this.isSelected;
  }
}
