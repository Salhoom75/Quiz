import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResultsStudent } from '../models/iresults-student';

@Injectable({
  providedIn: 'root'
})
export class ResultsStudentService {

  constructor(private _HttpClient: HttpClient) {}

  getStudentResults(): Observable<IResultsStudent[]> {
    return this._HttpClient.get<IResultsStudent[]>('quiz/result');
  }

}
