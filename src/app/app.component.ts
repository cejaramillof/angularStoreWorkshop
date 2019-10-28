import { Component } from '@angular/core';
import { Product } from './components/product/product.model';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
