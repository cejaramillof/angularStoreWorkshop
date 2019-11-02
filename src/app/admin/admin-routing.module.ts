import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {NavComponent} from './components/nav/nav.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ProductsListComponent} from './components/products-list/products-list.component';


const routes: Routes = [
  {
    path: 'product',
    component: NavComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'list', component: ProductsListComponent },
      { path: 'create', component: ProductFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
