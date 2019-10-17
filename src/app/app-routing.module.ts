import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store/store.component';
import { LoginComponent } from './admin/login/login.component';

const routes: Routes = [
  {path: 'store', component: StoreComponent},
  {path: 'admin/login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo: 'store'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
