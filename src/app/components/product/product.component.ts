import { Product } from './product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({ // Decorator
  // MetaData from Component
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() productClicked: EventEmitter<string> = new EventEmitter();

  /* = {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  };*/

  constructor() { }

  ngOnInit() {
  }

  addCart() {
    console.log('added');
    this.productClicked.emit(this.product.id);
  }
}
