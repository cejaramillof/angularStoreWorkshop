import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '@core/services/products/products.service';
import {Product} from '@core/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id: string = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void {
    this.productsService.get(id)
      .subscribe(product => {
        this.product = product;
      });
  }

  createProduct() {
    const newProduct: Product = {
      id: new Date().toDateString(),
      title: 'TITLE',
      description: 'DESCRIPTXXXIONE',
      price: 9023,
      image: '9I9D'
    };

    this.productsService.create(newProduct)
      .subscribe(product => {
        // this.product = product;
        console.log(product);
      });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      id: '2',
      title: 'TITLE edited',
    };

    this.productsService.update(updateProduct.id, updateProduct)
      .subscribe(product => {
        // this.product = product;
        console.log(product);
      });
  }

  deleteProduct(): void {
    this.productsService.delete('1')
      .subscribe(res => {
        console.log(res);
      });
  }
}
