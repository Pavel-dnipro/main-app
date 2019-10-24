import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.module';

@Injectable()

export class DbService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  public addProduct(body: Product): Observable<object> {
    return this.http.post<Product>('http://localhost:3000/products', body);
  }

}
