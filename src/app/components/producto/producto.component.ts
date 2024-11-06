import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
  products: Product[] = products;
}
