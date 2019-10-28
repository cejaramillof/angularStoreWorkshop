import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
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
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
      { path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    ]
  },
  { path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule) },
  { path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) }
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
