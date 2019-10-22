
import {Injectable} from '@angular/core';
import { DbService } from './db.service';
import { Product } from './product.module';



@Injectable()
export class ProductRepository {

  private productList: Product[] = [];
  private categories: string[] = [];

  constructor(private dbService: DbService) {
    this.dbService.getProducts().subscribe((products: Product[]) => {
      this.productList = products;
      this.categories = products.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
    });
  }
  public getAllProducts(category: string | null): Product[] {
    return this.productList.filter((p) =>{
      return category === null || p.category == category;
    });
  }

  public getProductById(id: number): Product {
    return this.productList.find((p) =>  p.id === id);
  }
  public getCategories(): string[] {
    return this.categories;
  }
}
