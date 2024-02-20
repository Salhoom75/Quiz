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
import { UpdateGroupComponent } from '../update-group/update-group.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  // allStudents: Student[] = [];
  allStudents: any;
  studentswithoutGroup: Student[] = [];
  allGroups: Group[] = [];
  groupData: Group | any;
  studentName?: Student;
  studentsGroupName: Student[] = [];
  recentId: string = '';
  notDeletedGroup: Group | any;
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
    // this.getGroupById(this.allGroups[0]._id)
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

  getAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.allGroups = res;
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
    this.recentId = id;
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

  openUpdateGroupDialog(data: Student) {
    const dialogRef = this.dialog.open(UpdateGroupComponent, {
      data: data,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      this.getGroupById(this.recentId);
    });
  }

  openAddToGroupDialogue(data: Student): void {
    const dialogRef = this.dialog.open(AddToGroupComponent, {
      data: data,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);

      this.getAllStudentsWithoutGroup();
    });
  }
  openAddDialogue(): void {
    const dialogRef = this.dialog.open(AddUpdateStudentComponent, {
      data: {},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
  openDeleteStudentDialog(data: Student, deleteFromGroup: boolean, groupData:Group): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { data, deleteFromGroup,groupData,name:data?.first_name},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        if (result.deleteFromGroup == true) {
          this.deleteStudentFromGroup(result.data._id,result.groupData._id)
        } else {
          this.deleteStudent(result.data._id);
        }
        this.getAllStudents();
      }
    });
  }
  deleteStudent(id: string) {
    this._StudentService.deleteStudent(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._Toastr.error(err.error.message);
      },
      complete: () => {
        this._Toastr.success('Record deleted successfully');
      },
    });
  }
  deleteStudentFromGroup(stuID:string, groupId:string){

    this._StudentService.deleteStudentFromGroup(stuID,groupId).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this._Toastr.error(err.error.message);
      },
      complete: () => {
        this._Toastr.success('Record deleted From Group successfully');
      },
    });

  }
}
