import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { OrderLine } from 'src/app/model/order-line.model';
import { ProductRepository } from '../../model/product.repository';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService,
    public repository: ProductRepository) { }

  ngOnInit() {
  }
  public removeLine(line: OrderLine): void {
    this.cartService.remove(line);
  }

  public addOrder(order: OrderLine[]): void {
    this.repository.addOrder(order);
  }
}
