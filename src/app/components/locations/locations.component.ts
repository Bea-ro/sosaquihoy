import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { products } from '../../data/products';
import { Product } from '../../models/models';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent implements OnInit {
  public locations: string[] = [];
  public allProducts: Product[] = products;

  ngOnInit(): void {
    const filteredProducts = this.allProducts.filter(
      (product) => product.isRequired && product.isDonated
    );

    const filteredLocations: string[][] = filteredProducts.map(
      (product) => product.locations
    );

    filteredLocations.flat().forEach((location) => {
      if (!this.locations.includes(location)) {
        this.locations.push(location);
      }
    });
  }
}
