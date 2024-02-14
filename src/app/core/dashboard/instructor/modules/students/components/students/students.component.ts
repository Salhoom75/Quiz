import { Component, OnInit } from '@angular/core';
import { AddUpdateStudentComponent } from '../add-update-student/add-update-student.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{

  allStudents:Student[]=[];
  studentswithoutGroup:Student[]=[];
  constructor(public dialog: MatDialog,private _StudentService:StudentsService,private _Toastr: ToastrService){
    
  }
ngOnInit(): void {
  this.getAllStudents()
  this.getAllStudentsWithoutGroup()
}
  getAllStudents(){
    this._StudentService.getAllStudents().subscribe({
      next:(res)=>{
console.log(res);
this.allStudents=res
      }
    })
  }
  getAllStudentsWithoutGroup(){
    this._StudentService.getAllStudentsWithoutGroup().subscribe({
      next:(res)=>{
console.log(res);
this.studentswithoutGroup=res
      }
    })
  }

  deleteStudent(id:string){
this._StudentService.deleteStudent(id).subscribe({
  next:(res)=>{
    console.log(res);
    this._Toastr.success(res.message)
          }, error: (err) => {
            this._Toastr.error(err.error.message);
          },
          complete: () => {
            this.getAllStudents()
          },
})
  }
openAddDialogue(): void {
  const dialogRef = this.dialog.open(AddUpdateStudentComponent, {
    data: {},
    width: '40%',
  });

  dialogRef.afterClosed().subscribe((result) => {
    console.log('The dialog was closed');
    console.log(result);
    if(result){

    }
  });
}
}
