import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iquestion } from '../models/iquestion';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  constructor(private _HttpClient: HttpClient) {}

  getAllQuestions(): Observable<any> {
    return this._HttpClient.get('question');
  }
  deletequestion(id: string) {
    return this._HttpClient.delete(`question/${id}`);
  }
  addQuestion(data: Iquestion): Observable<any> {
    return this._HttpClient.post('question', data);
  }
  updateQuestion(id: string, answer: string): Observable<any> {
    return this._HttpClient.put(`question/${id}`, { answer: answer });
  }
  getQuestionById(id: string): Observable<any> {
    return this._HttpClient.get(`question/${id}`);
  }
  Searchquestion(params: any): Observable<any> {
    return this._HttpClient.post('question/search', { params: params });
  }
}
