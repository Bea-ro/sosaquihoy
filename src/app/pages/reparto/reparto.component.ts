import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Product } from '../../models/models';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from '../../components/productos/producto.component';
import { LocationsComponent } from '../../components/locations/locations.component';
import { ProductService } from '../../services/product.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-reparto',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    ProductoComponent,
    LocationsComponent,
    FormsModule,
    FilterPipe,
  ],
  templateUrl: './reparto.component.html',
  styleUrl: './reparto.component.css',
})
export class RepartoComponent implements OnInit {
  public products$?: Observable<Product[]>;
  public searchInput: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.products$;
  }
}
