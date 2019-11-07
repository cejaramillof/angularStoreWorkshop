import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// import {HttpClient} from '@angular/common/http';
import {Product} from '@core/product.model';
import {environment} from '@environments/environment';

fdescribe('ProductsService', () => {
  // let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;
  const apiUrl: string = environment.platziApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule]
    });
    // httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('Tests for getAllProducts', () => {
    it('', () => {
      // Arrange
      const expectData: Array<Product> =  [
        {
          id: '1',
          title: 'Product 1',
          price: 100,
          description: 'Producto one',
          image: 'assets/image1.png'
        },
        {
          id: '2',
          title: 'Product 2',
          price: 200,
          description: 'Producto two',
          image: 'assets/image2.png'
        }
      ];
      let dataError;
      let dataResponse;

      // Act
      service.getAll()
        .subscribe( response => {
          dataResponse = response;
        }, error => {
          dataError = error;
        });
      const req = httpTestingController.expectOne(`${apiUrl}products`);
      req.flush(expectData);

      // Assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();

    });
  });
});
