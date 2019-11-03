import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {NavComponent} from './components/nav/nav.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProductsListComponent} from './components/products-list/products-list.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';


const routes: Routes = [
  {
    path: 'product',
    component: NavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'list', component: ProductsListComponent },
      { path: 'create', component: ProductFormComponent },
      { path: 'edit/:id', component: ProductEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
