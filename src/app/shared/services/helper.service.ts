import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserProfile } from '../models/iuser-profile';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private _httpClient:HttpClient) { }
  UpdateInstractorAccount(data: IUserProfile):Observable<IUserProfile> {
    return this._httpClient.put<IUserProfile>('instructor', data);
  }
  UpdateStudentAccount(data: IUserProfile):Observable<IUserProfile> {
    return this._httpClient.put<IUserProfile>('student', data);
  }
}
