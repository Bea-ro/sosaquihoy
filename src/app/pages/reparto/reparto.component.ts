import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/models';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../components/productos/producto.component';
import { LocationsComponent } from '../../components/locations/locations.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-reparto',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    ProductoComponent,
    LocationsComponent,
  ],
  templateUrl: './reparto.component.html',
  styleUrl: './reparto.component.css',
})
export class RepartoComponent implements OnInit {
  public searchInput: string = '';
  public filteredProducts: Product[] = [];
  public allProducts: Product[] = [];
  public notFound: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((products: Product[]) => (this.allProducts = products));
  }

  public getFilteredProducts(event: Event) {
    this.searchInput = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.allProducts.filter((product) =>
      product.name.toLowerCase().includes(this.searchInput)
    );
    if (this.filteredProducts.length === 0) {
      this.notFound = true;
    }
  }
}
