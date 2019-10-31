import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.module';
import { OrderLine } from './order-line.model';

@Injectable()

export class DbService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products/');
  }

  public addProduct(body: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products/', body);
  }

  public editProduct(body: Product, id): Observable<Product> {
    return this.http.put<Product>('http://localhost:3000/products/' + id, body);
  }

  public addOrder(order: OrderLine[]): Observable<any> {
    const body = {list: order};
    return this.http.post<any>('http://localhost:3000/orders', body);
  }

  // public getOrders()
}
