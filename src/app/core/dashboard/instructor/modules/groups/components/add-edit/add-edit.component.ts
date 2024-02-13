import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  Groupdata: Group[] = [];
  listStudents: any[] = [];
  idGroup: string = '';
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
      this.patchValueForm(this.data.groupData);
      this.idGroup = this.data.groupData._id;
    }
  }
  AddGroupForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    students: new FormControl([''],[Validators.required]),
  });
  onSubmit() {
    let postObj: any = {
      name: this.AddGroupForm.get('name')?.value,
      students: [this.AddGroupForm.get('students')?.value],
    };
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

  patchValueForm(groupData: Group) {
    this.AddGroupForm.patchValue({
      name: groupData.name,
      students: groupData.students,
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
