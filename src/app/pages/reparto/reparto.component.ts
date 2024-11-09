import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/models';
import { products } from '../../data/products';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../components/producto/producto.component';

@Component({
  selector: 'app-reparto',
  standalone: true,
  imports: [NavbarComponent, CommonModule, ProductoComponent],
  templateUrl: './reparto.component.html',
  styleUrl: './reparto.component.css',
})
export class RepartoComponent {
  public searchInput: string = '';
  public filteredProducts: Product[] = products;
  public allProducts: Product[] = products;
  public notFound: boolean = false;

  public getFilteredProducts(event: Event) {
    this.searchInput = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.allProducts.filter((product) =>
      product.name.toLowerCase().includes(this.searchInput)
    );
    if (this.filteredProducts.length === 0) {
      this.notFound = true;
    }
  }

  //añadir que si el productIsSelected, muestra debajo las LOCALIDADES de ese producto
}
