import { Injectable } from '@angular/core';
import {CanActivate, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './core/services/auth.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
/*
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
*/
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      map(user => user !== null),
      tap( hasUser => {
        if (!hasUser) {
          this.router.navigate(['/auth/login']);
        }
      })
    );
  }

}
