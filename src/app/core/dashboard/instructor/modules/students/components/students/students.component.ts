import { Component, OnInit } from '@angular/core';
import { AddUpdateStudentComponent } from '../add-update-student/add-update-student.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentsService } from '../../services/students.service';
import { Student } from '../../models/student';
import { ToastrService } from 'ngx-toastr';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../groups/models/group';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { AddToGroupComponent } from '../add-to-group/add-to-group.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  allStudents: Student[] = [];
  studentswithoutGroup: Student[] = [];
  allGroups: Group[] = [];
  groupData: Group | any;
  studentName?: Student;
  studentsGroupName: Student[] = [];
  matchGroupId: boolean = false;
  constructor(
    public dialog: MatDialog,
    private _StudentService: StudentsService,
    private _GroupService: GroupService,
    private _Toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllStudents();
    this.getAllStudentsWithoutGroup();
    this.getAllGroups();
    this.getGroupById(this.allGroups[0]._id)
  }
  getAllStudents() {
    this._StudentService.getAllStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.allStudents = res;
      },
    });
  }
  getAllStudentsWithoutGroup() {
    this._StudentService.getAllStudentsWithoutGroup().subscribe({
      next: (res) => {
        console.log(res);
        this.studentswithoutGroup = res;
      },
    });
  }

  deleteStudent(id: string) {
    this._StudentService.deleteStudent(id).subscribe({
      next: (res) => {
        console.log(res);
        this._Toastr.success(res.message);
      },
      error: (err) => {
        this._Toastr.error(err.error.message);
      },
      complete: () => {
        this.getAllStudents();
      },
    });
  }

  getAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.allGroups = res;
        // this.allGroups.forEach((groupStudents) => {
        //   groupStudents.students.forEach((studentId) => {
        //     console.log(studentId)
        //     this._StudentService.getStudentById(studentId).subscribe({
        //       next: (res:Student)=> {console.log(res)}
        //     });

        //   }
        //   );
        // });
      },
      error: (err) => {
        this._Toastr.error(err.error.message);
      },
      complete: () => {},
    });
  }
  getStudentById(id: string) {
    this._StudentService.getStudentById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.studentName = res;
      },
      error: (err) => {},
      complete: () => {},
    });
  }
  getGroupById(id: string) {
    this._GroupService.getGroupbyId(id).subscribe({
      next: (res) => {
        console.log(res);
        this.groupData = res;
        this.studentsGroupName = this.groupData.students;
        console.log(this.studentsGroupName);
      },
      error: (err) => {
        this._Toastr.error(err.error.message);
      },
      complete: () => {},
    });
  }
  matchGroupIdFn() {
    this.allGroups.forEach((group: Group) => {
      if (group._id == this.groupData._id) this.matchGroupId = true;
      console.log(this.matchGroupId);
    });
  }
  openDeleteDialog(data:Student):void{
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: data,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.getAllStudents()
      }
    });
  }
  openAddToGroupDialogue(data:Student): void {
    const dialogRef = this.dialog.open(AddToGroupComponent, {
      data: data,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      
        this.getAllStudentsWithoutGroup()
      
    });
  }
  openAddDialogue(): void {
    const dialogRef = this.dialog.open(AddUpdateStudentComponent, {
      data:{} ,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
}
