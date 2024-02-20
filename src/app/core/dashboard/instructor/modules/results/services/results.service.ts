import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  constructor(private _HttpClient: HttpClient) {}


allResult(): Observable<any> {
    return this._HttpClient.get('quiz/result');
  }
}
