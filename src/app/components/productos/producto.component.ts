import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/models';
import { RouterModule, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
})
export class ProductoComponent implements OnInit {
  @Input() products: Product[] = [];
  @Input() message: string = 'Tu necesidad se ha guardado.';
  @Input() arrayLength: undefined | number;
  public locationName: string = '';
  public currentRoute = '';
  public selectedIndices: number[] = [];

  constructor(
    private router: Router,
    private productService: ProductService,
    private locationService: LocationService
  ) {}

  ngOnInit() {
    this.currentRoute = this.router.url;
  }

  public getLocationName(): Observable<string> {
    return this.locationService.getLocationData();
  }

  public selectedProduct(product: Product, index: number) {
    const indexPosition = this.selectedIndices.indexOf(index);
    indexPosition > -1
      ? this.selectedIndices.splice(indexPosition, 1)
      : this.selectedIndices.push(index);

    if (this.currentRoute === '/necesito') {
      this.getLocationName().subscribe((locationName: string) => {
        this.locationName = locationName;
        this.productService
          .putProduct(product.name, this.locationName)
          .subscribe({
            next: (response) => {
              this.message = 'Tu necesidad se ha guardado';
              setTimeout(() => {
                this.message = 'Puedes seleccionar más necesidades';
              }, 3000);
            },
            error: (error) => {
              this.message =
                'No se ha podido guardar tu necesidad. Por favor, inténtalo más tarde';
            },
          });
      });
    }
  }
}
