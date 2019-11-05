import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductRoutingModule} from './product-routing.module';
import {ProductsContainer} from './container/products/products.container';
import {ProductComponent} from './components/product/product.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {SharedModule} from '@shared/shared.module';



@NgModule({
  declarations: [
    ProductsContainer,
    ProductComponent,
    ProductDetailComponent,
  ],
  exports: [
    ProductsContainer,
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
