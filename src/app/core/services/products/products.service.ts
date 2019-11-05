import { Injectable } from '@angular/core';
import {Product} from '@core/product.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '@environments/environment';
import {catchError, map} from 'rxjs/operators';

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
    return this.http.get<Array<Product>>(`${this.apiUrl}products`)
      .pipe(
        catchError(this.handleError)
      );
  }

  get(id: string): Observable<Product> {
    // return this.products.find(item => id === item.id);
    return this.http.get<Product>(`${this.apiUrl}products/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}products`, product)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}products/${id}`, changes)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}products/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  getRandomUsers(): Observable<Array<User>> {
    return this.http.get('https://randomuser.me/api/?results=2')
      .pipe(
        // catchError(error => throwError('Error')),
        catchError(this.handleError),
        map( (response: any) => response.results as Array<User> )
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Ups, error!');
  }
}

export interface User {
  email: string;
  gender: string;
  phone: string;
}
