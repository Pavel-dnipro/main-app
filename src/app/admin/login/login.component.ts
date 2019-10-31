import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public email: FormControl;
  public password: FormControl;
public isVisible = false;


  constructor(private login: LoginService, private router: Router) { }

  ngOnInit() {
    this.email = new FormControl('');
    this.password = new FormControl('');
    this.form = new FormGroup({
      email: this.email,
      password: this.password
    });
    this.login = new LoginService('', '');
  }

 public logIn() {
  const res = this.login.logIn(this.email.value, this.password.value);
  if (res) {
    this.router.navigate(['/admin/main/products']);
  } else {
    this.isVisible = true;
  }

  console.log(this.form.value);
 }
 public logOut(): void {

  this.router.navigate(['/store']);
}

}
