import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { products } from '../../data/products';
import { Product } from '../../models/models';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.css',
})
export class LocationsComponent {
  @Input() public locations: string[] = [];
}
