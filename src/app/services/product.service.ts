import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  SOS_API_URL: string = `http://localhost:4001/api/productos`;

  public getProducts() {
    return this.http.get<Product[]>(this.SOS_API_URL, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public postProduct(product: Product) {
    return this.http.post(this.SOS_API_URL, product, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
