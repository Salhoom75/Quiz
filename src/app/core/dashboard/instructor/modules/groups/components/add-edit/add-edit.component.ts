import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Group, AddGroup } from '../../models/group';
import { GroupService } from '../../services/group.service';
import { StudentsService } from '../../../students/services/students.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss'],
})
export class AddEditComponent {
  Groupdata1: Group[] = [];
  Groupdata2: Group[] = [];
  Groupdata: Group[] = [];
  groupdata: any;
  listStudents: string[] = [];
  constructor(
    public dialogRef: MatDialogRef<AddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _GroupService: GroupService,
    private StudentsService: StudentsService,
    private tostar: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllStudents();
  }
  AddGroupForm = new FormGroup({
    name: new FormControl(null),
    students: new FormControl(null),
  });
  onSubmit() {
    let postObj: any = {
      name: this.AddGroupForm.get('name')?.value,
      students: [this.AddGroupForm.get('students')?.value],
    };
    this._GroupService.createGroups(postObj).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onGetAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.Groupdata = res;
        this.Groupdata1 = res.slice(0, 5);
        this.Groupdata2 = res.slice(5, 10);
      },
    });
  }
  createGroup(data: AddGroup) {
    this._GroupService.createGroups(data).subscribe({
      next: (res) => {
        console.log(res.message);
        this.tostar.error(res.message, 'Error!');
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
  getAllStudents() {
    this.StudentsService.getAllStudentsWithoutGroup().subscribe({
      next: (res) => {
        console.log(res);
        this.groupdata = res;
      },
    });
  }
}
