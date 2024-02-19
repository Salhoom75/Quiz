import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { StudentsService } from 'src/app/core/dashboard/instructor/modules/students/services/students.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _StudentService:StudentsService,
    private _Toastr:ToastrService
    ) {
      console.log(data);

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
          this.onNoClick()
        },
      });
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
