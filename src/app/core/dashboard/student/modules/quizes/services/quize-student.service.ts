import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IQuizStudent } from '../models/iquiz-student';
import { Ianswer } from '../models/ianswer';

@Injectable({
  providedIn: 'root',
})
export class QuizeStudentService {
  constructor(private _HttpClient: HttpClient) {}

  getFirst5IncomingQuizzes(): Observable<any> {
    return this._HttpClient.get('quiz/incomming');
  }
  getCompletedQuizzes(): Observable<any> {
    return this._HttpClient.get('quiz/completed');
  }

  joinQuiz(code: string): Observable<any> {
    return this._HttpClient.post('quiz/join', code);
  }

  getQuestionsWiyhoutAnswer(id:string): Observable<IQuizStudent> {
    return this._HttpClient.get<IQuizStudent>(`quiz/without-answers/${id}`);
  }
  submitAnswer(id:string,answers:Ianswer[]): Observable<Ianswer> {
    return this._HttpClient.post<Ianswer>(`quiz/submit/${id}`,{"answers":answers});
  }
}
