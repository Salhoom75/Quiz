import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IQuiztable, Incomming, Quiz } from '../models/quiz';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizesService {
  constructor(private _HttpClient: HttpClient) {}

  createQuiz(data: Quiz): Observable<Quiz> {
    return this._HttpClient.post<Quiz>('quiz', data);
  }
  updateQuiz(quizId:string,data: any): Observable<any> {
    return this._HttpClient.put(`quiz/${quizId}`, {"title":data});
  }
  reassignQuiz(quizId:string,data: any): Observable<any> {
    return this._HttpClient.post(`quiz/reassign/${quizId}`, data);
  }
  getAllQuizes(): Observable<any> {
    return this._HttpClient.get('quiz');
  }
  getFiveIncommingStudents(): Observable<Incomming> {
    return this._HttpClient.get<Incomming>('quiz/incomming');
  }

  deleteQuiz(quizId:string): Observable<IQuiztable> {
    return this._HttpClient.delete<IQuiztable>(`quiz/${quizId}`);
  }
  completedQuizzes(): Observable<any> {
    return this._HttpClient.get('quiz/completed');
  }
  getQuizById(id:string): Observable<any> {
    return this._HttpClient.get(`quiz/${id}`);
  }
}
