import { Component, OnInit } from '@angular/core';
import {CartService} from '../../../core/services/cart.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total$: Observable<string>;

  constructor(
    private cartService: CartService
  ) {
    // not subscribe, is a observable. (data flow that will be alive)
    // subscribe in front to better performance
    this.total$ = this.cartService.cart$
      .pipe(
        map(products => products.length.toString())
      );
      /*
      this.cartService.cart$.subscribe(products => {
        this.total = products.length;
      });
       */
  }

  ngOnInit() {
  }

}
