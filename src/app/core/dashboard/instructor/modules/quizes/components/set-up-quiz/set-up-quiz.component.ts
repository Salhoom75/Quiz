import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { QuizCreatedComponent } from './components/quiz-created/quiz-created.component';

@Component({
  selector: 'app-set-up-quiz',
  templateUrl: './set-up-quiz.component.html',
  styleUrls: ['./set-up-quiz.component.scss'],
})
export class SetUpQuizComponent {
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<SetUpQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    let striArr = ['nn', 'dd', 89];

    striArr.push(78);
  }
  onClose() {
    this.dialogRef.close();
  }

  openDialog(): void {
    this.onClose();
    const dialogRef = this.dialog.open(QuizCreatedComponent, {
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
