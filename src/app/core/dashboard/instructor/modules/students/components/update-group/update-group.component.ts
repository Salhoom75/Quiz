import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { GroupService } from '../../../groups/services/group.service';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Group } from '../../../groups/models/group';

@Component({
  selector: 'app-update-group',
  templateUrl: './update-group.component.html',
  styleUrls: ['./update-group.component.scss']
})
export class UpdateGroupComponent implements OnInit{
  Groupdata: Group[] = [];
  
  constructor(
    public dialogRef: MatDialogRef<UpdateGroupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _GroupService: GroupService,
    private _StudentsService: StudentsService,
    private _Tostar: ToastrService
  ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.onGetAllGroups()
  }
  updateGroupForm = new FormGroup({
    
    groupId: new FormControl([''],[Validators.required]),
  });

  onGetAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.Groupdata = res;
        
      },
    });
  }

  onSubmit() {
    
    let  groupId=this.updateGroupForm.value.groupId;
    let  studentId=this.data._id
    
    this._StudentsService.updateStudentGroup(studentId,groupId).subscribe({
      next:(res)=>{
console.log(res);
this._Tostar.success('Updated Succesfully')
      },error:(err)=>{
        this._Tostar.error(err.error.message)
        
      }
      ,complete:()=>{
        this.onNoClick()
        
      }
    })
  }

 
 
 
 
  onNoClick(): void {
    this.dialogRef.close();}
  }
