import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';
import { MainComponent } from './admin/main/main.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { OrdersComponent } from './admin/orders/orders.component';


const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: '', pathMatch: 'full', redirectTo: 'store'},
  {path: 'admin/main', component: MainComponent,
  children: [
    {
      path: '', pathMatch: 'full', redirectTo: 'products',
    },
    {
      path: 'products', component: ProductComponent,
    },
    {
      path: 'products/:mode', component: ProductFormComponent,
    },
    {
      path: 'products/:mode/:id', component: ProductFormComponent,
    },
    {
      path: 'orders', component: OrdersComponent,
    },
    {
      path: 'login', component: LoginComponent,
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
