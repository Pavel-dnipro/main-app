
import {Injectable} from '@angular/core';
import { DbService } from './db.service';
import { Product } from './product.module';
import { OrderLine } from './order-line.model';
import { Observable } from 'rxjs';



@Injectable()
export class ProductRepository {

  private productList: Product[] = [];
  private categories: string[] = [];

  constructor(private dbService: DbService) {
    this.getList();
  }

  private getList() {
    this.dbService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
    });
  }

  public getAllProducts(category: string | null): Product[] {
    return this.productList.filter((p) => {
      return category === null || p.category === category;
    });
  }

  public getProductById(id: number): Product {
    return this.productList.find((p) =>  p.id === id);
  }

  public getCategories(): string[] {
    return this.productList
      .map((p) => p.category)
      .filter((c, i, arr) => arr.indexOf(c) === i);
  }

  public createProduct(body: Product): void {
    this.dbService.addProduct(body).subscribe(() => {
      this.getList();
    });
  }

  public editProduct(body: Product, id: number): void {
    this.dbService.editProduct(body, id).subscribe(() => {
      this.getList();
    });
  }
  public addOrder(order: OrderLine[]): any {
    this.dbService.addOrder(order).subscribe(() => {

    });
  }

  public getOrders(): Observable<Array<{id: number, list: OrderLine}>> {
    return this.dbService.getOrders();
  }
}
