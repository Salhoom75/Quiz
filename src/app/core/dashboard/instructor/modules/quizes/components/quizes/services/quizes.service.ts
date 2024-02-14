import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizesService {
  constructor(private _HttpClient: HttpClient) {}
  getAllQuizes(): Observable<any> {
    return this._HttpClient.get('quiz');
  }
}
