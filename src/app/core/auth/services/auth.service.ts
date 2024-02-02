import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { ILogin, IReset } from '../models/i-auth';
=======
import { ILogin } from '../models/i-auth';
import { jwtDecode } from 'jwt-decode';
>>>>>>> 2ad12cd0273d4aa22715d160e441921e6488c3e1

@Injectable({
  providedIn: 'root',
})
export class AuthService {
<<<<<<< HEAD
  constructor(private _httpClient: HttpClient) {}

  onForgetPassword(data: string): Observable<any> {
    return this._httpClient.post('portal/users/forgot-password ', {
      email: data,
    });
    
  }
  onLogin(data: ILogin): Observable<any> {
    return this._httpClient.post('portal/users/login', data);
  }
  onResetPassword(data: IReset): Observable<any> {
    return this._httpClient.post('portal/users/reset-password', data);
=======
role:string |null=''
  constructor(private _httpClient:HttpClient) {
    if (localStorage.getItem('userToken')!== null) {
      this.getUserToken()
    }
   }
   getUserToken(){
    let encoded:any=localStorage.getItem('userToken');
    let decoded=jwtDecode(encoded)
    console.log(decoded);
    
    localStorage.setItem('role',encoded.role);
    localStorage.setItem('userName',encoded.userName);
    this.getRole()
   }
getRole(){
  if (localStorage.getItem('userToken')!== null&&localStorage.getItem('role')) {
    this.role=localStorage.getItem('role')
  }
}

  onForgetPassword(data:string):Observable<any>
  {
   return this._httpClient.post('portal/users/forgot-password ', {email:data});
>>>>>>> 2ad12cd0273d4aa22715d160e441921e6488c3e1
  }

  onLogin(data:ILogin):Observable<any>{
    return this._httpClient.post('portal/users/login',data)
  }
}
