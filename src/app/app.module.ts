import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StoreModule } from './store/store.module';
import { AdminModule } from './admin/admin.module';
import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule,
    AdminModule,
    // ActivatedRoute

  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
