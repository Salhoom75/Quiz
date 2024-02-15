import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../groups/models/group';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentsService } from '../../services/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-to-group',
  templateUrl: './add-to-group.component.html',
  styleUrls: ['./add-to-group.component.scss']
})
export class AddToGroupComponent implements OnInit{
  allGroups:Group[]=[];
  studentId:string=''
  constructor(
    public dialogRef: MatDialogRef<AddToGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _Toastr:ToastrService,
    private _GroupService: GroupService,
    private _StudentsService: StudentsService,
  ) {
this.studentId=data._id
  }
ngOnInit(): void {
  this.getAllGroups()
}
  getAllGroups(){
    this._GroupService.getAllGroups().subscribe({
      next:(res)=>{
        console.log(res);
        this.allGroups=res
      }
    })
  }
  addForm=new FormGroup({
    group:new FormControl(null,[Validators.required])
  })
  onSubmit(from:FormGroup){
    console.log(from.value.group);
    
this._StudentsService.addStudentToGroup(this.studentId,from.value.group).subscribe({
  next:(res)=>{
    console.log(res);
    
  },
  error: (err) => {
    this._Toastr.error(err.error.message);
  },
  complete: () => {
    this._Toastr.success('Added to Group Succesfully');
    this.onNoClick()
  }
})
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
