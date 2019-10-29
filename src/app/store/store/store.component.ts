import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/model/db.service';
import { Product } from 'src/app/model/product.module';
import { ProductRepository } from 'src/app/model/product.repository';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  private currentCategory = null;

  public productList: Product[] = [];

  constructor(
    public productRepository: ProductRepository,
    public cartService: CartService,
    public router: Router
    ) { }

  ngOnInit() {

  }
  public get products(): Product[] {
    return this.productRepository.getAllProducts(this.currentCategory);
  }
  public get categories(): string[] {
    return this.productRepository.getCategories();
  }
  public addToCart(product: Product): void {
    this.cartService.addProduct(product);
    this.router.navigate(["/cart"]);


  }
  public changeCategory(c: string): void {
    console.log(c);
    this.currentCategory = c;
  }
}
