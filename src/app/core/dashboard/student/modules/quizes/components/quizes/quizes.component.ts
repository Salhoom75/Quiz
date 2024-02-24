import { Component, OnInit } from '@angular/core';
import { QuizeStudentService } from '../../services/quize-student.service';
import { IQuizStudent } from '../../models/iquiz-student';
import { JoinQuizComponent } from '../join-quiz/join-quiz.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IcompletedQuiz } from 'src/app/core/dashboard/instructor/modules/results/models/results';
import { CloseExamComponent } from '../close-exam/close-exam.component';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss'],
})
export class QuizesComponent implements OnInit {
  completedQuizzes: IcompletedQuiz[] = [];
  groupName=localStorage.getItem('group')
  constructor(
    private _QuizService: QuizeStudentService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getCompletedQuizzes();
  }
  getCompletedQuizzes() {
    this._QuizService.getCompletedQuizzes().subscribe({
      next: (res) => {
        console.log(res);
        this.completedQuizzes = res;
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
