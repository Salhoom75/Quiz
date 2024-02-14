import { Component, OnInit } from '@angular/core';
import { AddUpdateStudentComponent } from '../add-update-student/add-update-student.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../groups/models/group';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit{

  allStudents:Student[]=[];
  studentswithoutGroup:Student[]=[];
  allGroups:Group[]=[]
  studentName?:Student
  constructor(public dialog: MatDialog,private _StudentService:StudentsService,
    private _GroupService:GroupService
    ,private _Toastr: ToastrService){
    
  }
ngOnInit(): void {
  this.getAllStudents()
  this.getAllStudentsWithoutGroup()
  this.getAllGroups()
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

  getAllGroups(){
    this._GroupService.getAllGroups().subscribe({
      next:(res)=>{
        console.log(res);
        this.allGroups=res
         for(const group of  this.allGroups){
          for(const student of  group.students){
             this.getStudentById(student)
            console.log(student);
            

          }
         
          
         }
              }, error: (err) => {
                this._Toastr.error(err.error.message);
              },
              complete: () => {
                
              },
    })
  }
  getStudentById(id:string){
    this._StudentService.getStudentById(id).subscribe({
      next:(res)=>{
        console.log(res);
  this.studentName=res
              }, error: (err) => {
                
              },
              complete: () => {
                
              },
    })
  }
  getGroupById(id:string){
    this._GroupService.getGroupbyId(id).subscribe({
      next:(res)=>{
        console.log(res);
  
              }, error: (err) => {
                this._Toastr.error(err.error.message);
              },
              complete: () => {
                
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
