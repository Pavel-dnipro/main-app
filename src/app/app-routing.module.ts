import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';
import { MainComponent } from './admin/main/main.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { CartComponent } from './store/cart/cart.component';
import { AuthGuard } from './store/store/auth.guard';


const routes: Routes = [
  {path: '', component: StoreComponent},
  {path: 'store', component: StoreComponent},
  {path: 'cart', component: CartComponent},
  {path: '', pathMatch: 'full', redirectTo: 'store'},
  {path: 'admin/auth', component: LoginComponent},
  {path: 'admin/main', component: MainComponent,
  children: [
    {
      path: '', pathMatch: 'full', redirectTo: 'products', canActivate: [AuthGuard]
    },
    {
      path: 'products', component: ProductComponent, canActivate: [AuthGuard]
    },
    {
      path: 'products/:mode', component: ProductFormComponent, canActivate: [AuthGuard]
    },
    {
      path: 'products/:mode/:id', component: ProductFormComponent, canActivate: [AuthGuard]
    },
    {
      path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
