import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Incomming, Quiz } from '../models/quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizesService {
  constructor(private _HttpClient: HttpClient) {}

  createQuiz(data: Quiz): Observable<any> {
    return this._HttpClient.post('quiz', data);
  }
  getAllQuizes(): Observable<any> {
    return this._HttpClient.get('quiz');
  }
  getFiveIncommingStudents(): Observable<Incomming> {
    return this._HttpClient.get<Incomming>('quiz/incomming');
  }
}
