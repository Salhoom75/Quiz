import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private _HttpClient: HttpClient) {}
 
  getAllStudents(): Observable<any> {
    return this._HttpClient.get('student');
  }
  deleteStudent(id:string): Observable<any> {
    return this._HttpClient.delete(`student/${id}`);
  }
  getAllStudentsWithoutGroup(): Observable<any> {
    return this._HttpClient.get('student/without-group');
  }
}
