import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private _HttpClient: HttpClient) {}

  getTopFiveStudents(): Observable<any> {
    return this._HttpClient.get('student/top-five');
  }
}
