import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginPayload } from './auth/login-payload';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // base url to make it common.
  private baseUrl = "http://localhost:8000/api/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  //login api call.
  login(loginPayload: LoginPayload): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'user/login', loginPayload, { headers: headers }).pipe(map(data => {
      this.localStorageService.store('loginData', data);
      return true;
    }));
  }

  //register api call
  // register(registerPayload: RegisterPayoad): Observable<any> {
  //   let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.httpClient.post(this.baseUrl + 'user/signup', registerPayload, { headers: headers });
  // }


  // Is authenticated method to check whether user has logged in or not.
  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('loginData') != null;
  }

  // logout - Clear localstorage data.
  logout() {
    this.localStorageService.clear('loginData');
  }

}
