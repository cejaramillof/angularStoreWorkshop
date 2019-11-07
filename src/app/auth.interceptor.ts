import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenService} from '@core/services/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private token: TokenService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    console.log('xd');
    if (req.url.indexOf('/admin') === 1) {
      req = this.addToken(req);
    }
    return next.handle(req);
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = this.token.getToken();
    if (token) {
      req = req.clone({setHeaders: {token}});
      return req;
    }
    return req;
  }
}
