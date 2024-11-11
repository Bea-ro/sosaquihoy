import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../../components/productos/producto.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/models';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/location.service';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-necesito',
  standalone: true,
  imports: [ProductoComponent, NavbarComponent, CommonModule],
  templateUrl: './necesito.component.html',
  styleUrl: './necesito.component.css',
})
export class NecesitoComponent implements OnInit {
  public allProducts: Product[] = [];
  public filteredProducts: Product[] = [];
  public searchInput: string = '';
  public notFound: boolean = false;
  public newProduct: Product = {
    name: '',
    isRequired: true,
    isDonated: false,
    locations: [],
  };
  public locationName: string = '';
  public postMessage: string = '';

  constructor(
    private locationService: LocationService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.allProducts = products;
      this.filteredProducts = products;
      console.log(this.filteredProducts);
    });
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

  public getLocationName(): Observable<string> {
    return this.locationService.getLocationData();
  }

  public addProduct(searchInput: string) {
    this.getLocationName().subscribe((locationName: string) => {
      this.locationName = locationName;

      this.newProduct = {
        name: searchInput,
        isRequired: true,
        isDonated: false,
        locations: [this.locationName],
      };
      console.log(this.newProduct);
      this.productService.postProduct(this.newProduct).subscribe({
        next: (addedProduct) => {
          console.log(addedProduct);
          console.log(this.filteredProducts);
          this.filteredProducts.unshift(addedProduct as Product);
          this.postMessage = 'Tu necesidad se ha guardado.';
        },
        error: (errorValue) =>
          (this.postMessage =
            'No se ha podido guardad tu necesidad. Por favor, inténtalo más tarde.'),
        complete: () => {
          this.searchInput = '';
          this.notFound = false;
        },
      });
    });
  }
}
