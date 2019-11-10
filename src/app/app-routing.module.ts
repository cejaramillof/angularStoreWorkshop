import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {AdminGuard} from './admin.guard';
import {QuicklinkStrategy} from 'ngx-quicklink';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule), // Dynamic Import
        data: {preload: true}
      },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
        data: {preload: true}
      },
      {
        path: 'order',
        loadChildren: () => import('./order/order.module').then(m => m.OrderModule)
      }
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // Code splitting
    // Pre-cargar los modulos cuando el navegador esté libre
    // Para renderizar más rápido al cambiar de modulo.
    // {preloadingStrategy: PreloadAllModules}
    // Custom Strategy
    // {preloadingStrategy: PreloadService}
    // Strategy based on intersection observer api, charge when links load in viewport
    {preloadingStrategy: QuicklinkStrategy}
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
