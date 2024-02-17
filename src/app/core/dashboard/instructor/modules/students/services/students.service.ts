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
  deleteStudent(id: string): Observable<any> {
    return this._HttpClient.delete(`student/${id}`);
  }
  getStudentById(id: string): Observable<any> {
    return this._HttpClient.get(`student/${id}`);
  }
  getAllStudentsWithoutGroup(): Observable<any> {
    return this._HttpClient.get('student/without-group');
  }
  deleteStudentFromGroup(studentId: string, groupId: string): Observable<any> {
    return this._HttpClient.delete(`student/${studentId}/${groupId}`);
  }
  addStudentToGroup(studentId: string, groupId: string): Observable<any> {
    return this._HttpClient.get(`student/${studentId}/${groupId}`);
  }
  updateStudentGroup(studentId: string, groupId: any): Observable<any> {
    return this._HttpClient.put(`student/${studentId}/${groupId}`,{});
  }
}
