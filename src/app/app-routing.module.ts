import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {LayoutComponent} from './layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '',
        redirectTo: '/home',
        pathMatch: 'full' },
      { path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
      { path: 'contact',
        component: ContactComponent },
      { path: 'products',
        component: ProductsComponent },
      { path: 'products/:id',
        component: ProductDetailComponent }
    ]},
  { path: 'demo', component: DemoComponent },
  // ** = No match
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // Pre-cargar los modulos cuando el navegador esté libre
    // Para renderizar más rápido al cambiar de modulo.
    { preloadingStrategy: PreloadAllModules }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
