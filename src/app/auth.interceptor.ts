import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = this.addToken(req);
    return next.handle(req);
  }

  private addToken(req: HttpRequest<any>): HttpRequest<any> {
    const token = 'T0K3N';
    if (true) {
      req = req.clone({
        setHeaders: {token}
      });
      return req;
    }
    return req;
  }
}
