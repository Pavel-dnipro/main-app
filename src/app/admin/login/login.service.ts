import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private login = "admin";
  private password = "admin";
  private token = false;
  const AUTH = {login: "admin", password: "admin" };

  constructor(private router: Router) {

  }

 public logIn(login: string, password: string): boolean {
    if (login === this.AUTH.login && password === this.AUTH.password) {

      return  this.token = true;
    } else {
      return  this.token = false;
    }

  }

public logOut() {
    return  this.token = false;
    this.router.navigate(['']);
  }
}
