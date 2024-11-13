import { Component, OnInit } from '@angular/core';
import { ProductoComponent } from '../../components/productos/producto.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/models';
import { CommonModule } from '@angular/common';
import { LocationService } from '../../services/location.service';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-necesito',
  standalone: true,
  imports: [
    ProductoComponent,
    NavbarComponent,
    CommonModule,
    FilterPipe,
    FormsModule,
  ],
  templateUrl: './necesito.component.html',
  styleUrl: './necesito.component.css',
})
export class NecesitoComponent implements OnInit {
  public products$?: Observable<Product[]>;

  public searchInput: string = '';
  public newProduct: Product = {
    name: '',
    isRequired: true,
    isDonated: false,
    locations: [],
  };
  public locationName: string = '';
  public message: string = 'Busca y selecciona lo que necesitas';
  public arrayLength: undefined | number;

  constructor(
    private locationService: LocationService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.products$;
    //this.products$.subscribe((products) => console.log('Productos:', products));
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

      this.productService.postProduct(this.newProduct).subscribe({
        next: (addedProduct) => {
          console.log(addedProduct);
          this.message = 'Tu necesidad se ha guardado.';
        },
        error: (errorValue) =>
          (this.message =
            'No se ha podido guardad tu necesidad. Por favor, inténtalo más tarde'),
        complete: () => {
          this.searchInput = '';
        },
      });
    });
  }
}
