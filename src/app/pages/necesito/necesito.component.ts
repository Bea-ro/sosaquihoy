import { Component } from '@angular/core';
import { ProductoComponent } from '../../components/producto/producto.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { products } from '../../data/products';
import { Product } from '../../models/models';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/location.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-necesito',
  standalone: true,
  imports: [ProductoComponent, NavbarComponent, CommonModule],
  templateUrl: './necesito.component.html',
  styleUrl: './necesito.component.css',
})
export class NecesitoComponent {
  public allProducts: Product[] = products;
  public filteredProducts: Product[] = products;
  public searchInput: string = '';
  public notFound: boolean = false;
  public newProducts: Product[] = [];
  public locationName$: Observable<string> | string = '';

  constructor(private locationService: LocationService) {}

  public getFilteredProducts(event: Event) {
    this.searchInput = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.allProducts.filter((product) =>
      product.name.toLowerCase().includes(this.searchInput)
    );
    if (this.filteredProducts.length === 0) {
      this.notFound = true;
    }
  }

  public getLocationName(lat: string, lon: string): Observable<string> {
    return this.locationService.getLocationData(lat, lon);
  }

  public addProduct(searchInput: string): Product[] {
    this.getLocationName(
      localStorage.getItem('lat') as string,
      localStorage.getItem('lon') as string
    ).subscribe((locationName: string) => {
      const newProduct: Product = {
        name: searchInput,
        image: '',
        isSelected: false,
        locationName: locationName,
      };
      this.allProducts.push(newProduct);
      console.log(this.allProducts);
    });
    return this.allProducts;
  }
}
