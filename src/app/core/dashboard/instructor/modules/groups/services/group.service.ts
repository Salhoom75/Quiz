import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { addGroup } from '../models/group';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private _HttpClient: HttpClient) {}

  getAllGroups(): Observable<any> {
    return this._HttpClient.get('group');
  }

  deleteGroup(id: string): Observable<any> {
    return this._HttpClient.delete(`group/${id}`);
  }
  getGroupbyId(id: string): Observable<any> {
    return this._HttpClient.get(`group/${id}`);
  }
  createGroups(data: addGroup): Observable<any> {
    return this._HttpClient.post('group', data);
  }

}
