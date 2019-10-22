import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';

const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'admin/login', component: LoginComponent},
  {path: 'admin/products', component: ProductComponent},
  {path: '', pathMatch: 'full', redirectTo: 'store'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
