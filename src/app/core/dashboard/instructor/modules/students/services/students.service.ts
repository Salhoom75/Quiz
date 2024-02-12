import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _HttpClient: HttpClient) {}
  getAllGroups(): Observable<any> {
    return this._HttpClient.get('student');
  }
  getAllStudentsWithoutGroup(): Observable<any> {
    return this._HttpClient.get('student/without-group');
  }
}
