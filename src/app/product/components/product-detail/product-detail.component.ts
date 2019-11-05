import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService, User} from '@core/services/products/products.service';
import {Product} from '@core/product.model';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  // product: Product;
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(
        // switchmap replace any observable for other observable
        switchMap((params: Params) => this.productsService.get(params.id))
      );
      /*
      .subscribe((product: Product) => {
        this.product = product;
      });
      */

    /*
    this.route.params.subscribe((params: Params) => {
      const id: string = params.id;
      this.fetchProduct(id);
    });
     */
  }

  /*
  fetchProduct(id: string): void {
    this.productsService.get(id)
      .subscribe(product => {
        this.product = product;
      });
  }
  */

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

  getRandomUsers() {
    this.productsService.getRandomUsers()
      .subscribe(
        (users: Array<User>) => {
          console.log(users);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
