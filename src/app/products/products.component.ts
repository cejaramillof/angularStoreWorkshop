import { Component, OnInit } from '@angular/core';
import {Product} from '../components/product/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log(`Product: ${id}`);
  }

}
