import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-question',
  templateUrl: './add-edit-question.component.html',
  styleUrls: ['./add-edit-question.component.scss']
})
export class AddEditQuestionComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddEditQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let striArr = ['nn', 'dd', 89];

    striArr.push(78);
  }
  onClose() {
    this.dialogRef.close();
  }


}
