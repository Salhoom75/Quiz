import { Component } from '@angular/core';
import { SetUpQuizComponent } from '../set-up-quiz/set-up-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { QuizesService } from '../../services/quizes.service';
import { IQuiztable } from '../../models/quiz';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss'],
})
export class QuizesComponent {
  quizes: IQuiztable[] = [];
  constructor(
    public dialog: MatDialog,
    private _QuizesService: QuizesService
  ) {}
  ngOnInit(): void {
    this.getAllquizes();
  }
  getAllquizes() {
    this._QuizesService.getAllQuizes().subscribe({
      next: (res) => {
        console.log(res);
        this.quizes = res;
      },
    });
  }

  startQuiz() {
    const dialogRef = this.dialog.open(SetUpQuizComponent, {
      data: {},
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }
}
