import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'SOS aquí hoy';

  constructor(private prodcutService: ProductService) {}

  ngOnInit(): void {
    this.prodcutService.getProducts();
  }
}
