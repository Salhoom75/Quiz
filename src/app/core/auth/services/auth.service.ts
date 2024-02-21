import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChange, ILogin, IRegister, IReset } from '../models/i-auth';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';

  constructor(private _httpClient: HttpClient) {
    if (localStorage.getItem('userToken') !== null) {
      this.getUserToken();
    }
  }
  getUserToken() {
    let encoded: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded);
    console.log(decoded);
    console.log(decoded.role);
    localStorage.setItem('role', decoded.role);
    localStorage.setItem('userName', decoded.email);
    localStorage.setItem('Id', decoded.sub);
    this.getRole();
  }
  getRole() {
    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role')
    ) {
      this.role = localStorage.getItem('role');
    }
  }
  onLogin(data: ILogin): Observable<any> {
    return this._httpClient.post('auth/login', data);
  }

  onChangePass(data: IChange): Observable<any> {
    return this._httpClient.post('portal/users/', data);
  }

  onForgetPassword(data: string): Observable<any> {
    return this._httpClient.post('auth/forgot-password', { email: data });
  }

  onResetPassword(data: IReset): Observable<any> {
    return this._httpClient.post('portal/users/reset-password', data);
  }
  onRegister(data: IRegister): Observable<any> {
    return this._httpClient.post('auth/register', data);
  }

}
