import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { ProductComponent } from "./product/product.component";
import { OrdersComponent } from "./orders/orders.component";
import { ProductFormComponent } from "./product-form/product-form.component";
import { MainComponent } from "./main/main.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    LoginComponent,
    ProductComponent,
    OrdersComponent,
    ProductFormComponent,
    MainComponent
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule]
})
export class AdminModule {}
