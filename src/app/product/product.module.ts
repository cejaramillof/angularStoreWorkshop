import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from './product-routing.module';
import {ProductsComponent} from './components/products/products.component';
import {ProductComponent} from './components/product/product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  exports: [
    ProductsComponent,
    ProductComponent,
    ProductDetailComponent,
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class ProductModule { }
