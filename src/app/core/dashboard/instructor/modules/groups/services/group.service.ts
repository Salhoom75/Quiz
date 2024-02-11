import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroup } from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private _HttpClient:HttpClient) { }


  getAllGroups():Observable<any>{
    return this._HttpClient.get('group')
  }
  createGroup(data:IGroup):Observable<any>{
    return this._HttpClient.post('group',data)
  }
  updateGroups(data:IGroup,id:string):Observable<any>{
    return this._HttpClient.put(`group/${id}`,data)
  }
  deleteGroup(id:string):Observable<any>{
    return this._HttpClient.delete(`group/${id}`)
  }
  getGroupbyId(id:string):Observable<any>{
    return this._HttpClient.get(`group/${id}`)
  }
}
