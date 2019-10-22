import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/model/db.service';
import { Product } from 'src/app/model/product.module';
import { ProductRepository } from 'src/app/model/product.repository';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  private currentCategory = null;

  public productList: Product[] = [];

  constructor(public productRepository: ProductRepository) { }

  ngOnInit() {

  }
  public get products(): Product[] {
    return this.productRepository.getAllProducts(this.currentCategory);
  }
  public get categories(): string[] {
    return this.productRepository.getCategories();
  }
  public addToCart(product: Product): void {
    console.log(product);
  }
  public changeCategory(c: string): void {
    console.log(c);
    this.currentCategory = c;
  }
}
