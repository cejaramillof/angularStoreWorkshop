import { Injectable } from '@angular/core';
import {Product} from '@core/product.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  apiUrl: string = environment.platziApi;
  productsArray: Array<Product> = [
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];
  product: Array<Product>;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(`${this.apiUrl}products`);
  }

  get(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}products/${id}`);
    // return this.products.find(item => id === item.id);
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}products`, product);
  }

  update(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}products/${id}`, changes);
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}products/${id}`);
  }

  getRandomUsers(): Observable<Array<User>> {
    return this.http.get('https://randomuser.me/api/?results=2')
      .pipe(
        map( (response: any) => response.results as Array<User> )
      );
  }
}

export interface User {
  email: string;
  gender: string;
  phone: string;
}
