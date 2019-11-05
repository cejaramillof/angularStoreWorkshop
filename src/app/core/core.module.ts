import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsService} from '@core/services/products/products.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // Imports with unique reference, like services
    ProductsService
  ]
})
export class CoreModule { }
