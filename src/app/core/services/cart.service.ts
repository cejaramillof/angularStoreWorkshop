import { Injectable } from '@angular/core';
import {Product} from '@core/product.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];

  // so they can subscribe
  private cart = new BehaviorSubject<Product[]>([]);

  // listening channel, to subscribe to BehaviorSubject
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product];
    this.cart.next(this.products);
  }
}
