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
  public selectedIndices: number[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  public selectedProduct(product: Product, index: number) {
    const indexPosition = this.selectedIndices.indexOf(index);
    indexPosition > -1
      ? this.selectedIndices.splice(indexPosition, 1)
      : this.selectedIndices.push(index);

    if (this.currentRoute === '/necesito') {
      //añadir el put de isRequired
    }
  }
}
