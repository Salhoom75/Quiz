import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group, AddGroup } from '../../models/group';
import { GroupService } from '../../services/group.service';
import { StudentsService } from '../../../students/services/students.service';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../../../students/models/student';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent {
  Groupdata: Group[] = [];
  listStudents: Student[] | any = [];
  idGroup: string = '';
  groupData: Group | any = '';
  isUpdated: boolean = false;
  studentsForm: Student[] | any = [];
  constructor(
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _GroupService: GroupService,
    private StudentsService: StudentsService,
    private tostar: ToastrService
  ) {
    console.log(data);
  }

  ngOnInit(): void {
    this.getAllStudentsWithoutGroup();
    if (this.data) {
      this.isUpdated = true;
      this.getGroupById(this.data);
      this.idGroup = this.data;
    }
  }
  AddGroupForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    students: new FormControl(this.studentsForm, [Validators.required]),
  });

  onSubmit() {
    let students = this.AddGroupForm.get('students')?.value;
    let studentsId: string[] =[];
    students.forEach((student: Student) => {
      studentsId.push(student._id);
    });
    console.log(studentsId)
    let postObj: any = {
      name: this.AddGroupForm.get('name')?.value,
      students: studentsId,
    };
    console.log(postObj);
    if (this.data) {
      this.updateGroup(this.idGroup, postObj);
    } else {
      this.createGroup(postObj);
    }
  }

  createGroup(data: AddGroup) {
    this._GroupService.createGroups(data).subscribe({
      next: (res) => {
        console.log(res.message);
      },
      error: (err) => {
        this.tostar.error(err, 'Error!');
      },
      complete: () => {
        this.tostar.success('done', 'Added in Group');
        this.onNoClick();
      },
    });
  }
  getGroupById(id: string) {
    this._GroupService.getGroupbyId(id).subscribe({
      next: (res) => {
        console.log(res);
        this.groupData = res;
        this.patchValueForm(this.groupData);
      },
      error: (err) => {
        this.tostar.error(err.error.message);
      },
      complete: () => {},
    });
  }
  patchValueForm(groupData: Group) {
    this.AddGroupForm.patchValue({
      name: groupData.name,
      students: groupData.students,
    });
    groupData.students.forEach((student) => {
      this.listStudents.push(student);
    });
    console.log(this.AddGroupForm.value);
  }
  updateGroup(idGroup: string, data: AddGroup) {
    this._GroupService.editGroup(idGroup, data).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.tostar.error(err, 'Error!');
      },
      complete: () => {
        this.tostar.success('Record updated successfully');
        this.onNoClick();
      },
    });
  }
  getAllStudentsWithoutGroup() {
    this.StudentsService.getAllStudentsWithoutGroup().subscribe({
      next: (res) => {
        console.log(res);
        this.listStudents = res;
      },
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
