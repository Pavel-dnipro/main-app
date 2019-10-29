import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product.module';
import { OrderLine } from 'src/app/model/order-line.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public orderLineList: Array<OrderLine> = [];
  public total: number = 0;


  constructor() {

  }

  public remove(line: OrderLine) {
    const index = this.orderLineList.findIndex((item) => item.product === line.product);
    this.orderLineList.splice(index, 1);
  }

  public addProduct(product: Product): void {
    const res = this.orderLineList.find((item) => item.product === product.name);
    if (res) {
      res.quan = res.quan + 1;
      res.subtotal += product.price;
      console.log(res);

      const index = this.orderLineList.findIndex((item) => item.product === product.name);
      this.orderLineList[index] = res;
    } else {


      const order = new OrderLine(1, product.name, product.price, (product.price * 1));
      this.orderLineList.push(order);

    }

    this.total = 0;
    this.orderLineList.forEach((item) => {
      this.total += item.subtotal;
    });
}

}
