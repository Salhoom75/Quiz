import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditQuestionComponent } from '../add-edit-question/add-edit-question.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent {
  constructor(public dialog: MatDialog) {}

  openDialogAddEdit(): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {
      data: {},
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
}
