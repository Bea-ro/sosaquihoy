import { Component } from '@angular/core';
import { ProductoComponent } from '../../components/producto/producto.component';

@Component({
  selector: 'app-necesito',
  standalone: true,
  imports: [ProductoComponent],
  templateUrl: './necesito.component.html',
  styleUrl: './necesito.component.css',
})
export class NecesitoComponent {}
