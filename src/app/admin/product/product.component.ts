import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.module';
import { ProductRepository } from 'src/app/model/product.repository';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productList: Product[] = [];

  constructor(public productRepository: ProductRepository) { }

  ngOnInit() {
  }
  public get products(): Product[] {
    return this.productRepository.getAllProducts(null);
  }
}
