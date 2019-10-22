import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DbService } from './db.service';
import { ProductRepository } from './product.repository';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [DbService, ProductRepository],
  exports: [HttpClientModule]
})
export class ModelModule { }
