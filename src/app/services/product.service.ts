import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/models';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  SOS_API_URL: string = `http://localhost:4001/api/productos`;

  private productsSubject = new BehaviorSubject<Product[]>([]);
  products$: Observable<Product[]> = this.productsSubject.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): void {
    this.http
      .get<Product[]>(this.SOS_API_URL, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe((products) => {
        this.productsSubject.next(products);
      });
  }

  public postProduct(product: Product) {
    return this.http.post(this.SOS_API_URL, product, {
      headers: { 'Content-Type': 'application/json' },
    });
  }

  public putProduct(productName: string, location: string): Observable<any> {
    return this.http.put(
      `${this.SOS_API_URL}/${productName}`,
      { location },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
