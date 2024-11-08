import { Component } from '@angular/core';
import { ProductoComponent } from '../../components/producto/producto.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { products } from '../../data/products';
import { Product } from '../../models/models';
import { EventEmitter } from 'node:stream';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-necesito',
  standalone: true,
  imports: [ProductoComponent, NavbarComponent],
  templateUrl: './necesito.component.html',
  styleUrl: './necesito.component.css',
})
export class NecesitoComponent {
  public allProducts: Product[] = products;
  public filteredProducts: Product[] = products;
  public searchInput: string = '';

  public getFilteredProducts(event: Event) {
    this.searchInput = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.allProducts.filter((product) =>
      product.name.toLowerCase().includes(this.searchInput)
    );
  }
}
