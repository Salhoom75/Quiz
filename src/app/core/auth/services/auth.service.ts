import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient:HttpClient) { }

  onForgetPassword(data:string):Observable<any>
  {
   return this._httpClient.post('portal/users/forgot-password ', {email:data});
  }
}
