import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/models';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  @Input() products: Product[] = [];
  public currentRoute = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  public selectedProduct(product: Product) {
    if (this.currentRoute === '/necesito') {
      product.isRequired = !product.isRequired;
    } else if (this.currentRoute === '/reparto') {
      product.isDonated = !product.isDonated;
    }
  }
}
