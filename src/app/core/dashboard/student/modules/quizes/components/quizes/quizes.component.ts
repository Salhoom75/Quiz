import { Component, OnInit } from '@angular/core';
import { QuizeStudentService } from '../../services/quize-student.service';
import { IQuizStudent } from '../../models/iquiz-student';
import { JoinQuizComponent } from '../join-quiz/join-quiz.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss'],
})
export class QuizesComponent implements OnInit {
  quizzes: IQuizStudent[] = [];
  constructor(
    private _QuizService: QuizeStudentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getIncoming5Quizzes();
  }
  getIncoming5Quizzes() {
    this._QuizService.getFirst5IncomingQuizzes().subscribe({
      next: (res) => {
        console.log(res);
        this.quizzes = res;
      },
    });
  }

  JoinQuizDialoug(): void {
    const dialogRef = this.dialog.open(JoinQuizComponent, {
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
}
