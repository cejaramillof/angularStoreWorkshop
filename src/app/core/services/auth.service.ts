import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {TokenService} from '@core/services/token.service';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = environment.platziApi;

  constructor(
    private angularFireAuth: AngularFireAuth,
    private http: HttpClient,
    private token: TokenService
  ) { }

  createUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }

  hasUser() {
    return this.angularFireAuth.authState;
  }

  loginApi(email: string, password: string) {
    return this.http.post(`${this.apiUrl}auth`, {
      email,
      password
    })
      .pipe(
        tap( (data: {token: string}) => this.token.saveToken(data.token) )
      );
  }
}
