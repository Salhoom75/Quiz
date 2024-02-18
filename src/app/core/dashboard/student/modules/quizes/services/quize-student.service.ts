import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuizStudent } from '../models/iquiz-student';

@Injectable({
  providedIn: 'root',
})
export class QuizeStudentService {
  constructor(private _HttpClient: HttpClient) {}

  getFirst5IncomingQuizzes(): Observable<any> {
    return this._HttpClient.get('quiz/incomming');
  }

  joinQuiz(code: string): Observable<any> {
    return this._HttpClient.post('quiz/join', code);
  }

  getQuestionsWiyhoutAnswer(id:string): Observable<IQuizStudent> {
    return this._HttpClient.get<IQuizStudent>(`quiz/without-answers/${id}`);
  }
}
