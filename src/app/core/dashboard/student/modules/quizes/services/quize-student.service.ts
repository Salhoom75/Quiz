import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
}
