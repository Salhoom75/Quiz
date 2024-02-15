import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-created',
  templateUrl: './quiz-created.component.html',
  styleUrls: ['./quiz-created.component.scss']
})
export class QuizCreatedComponent {
  constructor( private dialogRef:DialogRef ){}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
