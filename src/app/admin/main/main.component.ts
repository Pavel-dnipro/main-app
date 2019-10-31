
import { OrderLine } from 'src/app/model/order-line.model';

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/store/cart/cart.service';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  constructor(public cartService: CartService, private loginService: LoginService, private router: Router) { }

  ngOnInit() { }

  public logOut(): void {
    this.loginService.logOut();
  }
}



