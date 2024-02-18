import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-code',
  templateUrl: './quiz-code.component.html',
  styleUrls: ['./quiz-code.component.scss'],
})
export class QuizCodeComponent {
  constructor(
    private dialogRef: MatDialogRef<QuizCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
