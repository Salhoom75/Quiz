import { Component } from '@angular/core';
import { SetUpQuizComponent } from '../set-up-quiz/set-up-quiz.component';
import { MatDialog } from '@angular/material/dialog';
import { QuizesService } from '../../services/quizes.service';
import { IQuiztable, Incomming } from '../../models/quiz';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss'],
})
export class QuizesComponent {
  quizes: IQuiztable[] = [];
  IncomingStudents: Incomming[] | any = [];
  constructor(
    public dialog: MatDialog,
    private _QuizesService: QuizesService,
    private tostar: ToastrService

  ) {}
  ngOnInit(): void {
    this.getAllquizes();
    this.getFiveIncommingStudents();
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
  getFiveIncommingStudents() {
    this._QuizesService.getFiveIncommingStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.IncomingStudents = res;
      },
    });
  }
  openDialogDelete(data: IQuiztable): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { data, name:data.title},
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(data);

      if (result) {
        console.log(result.data._id);
        this.deleteQuiz(result.data._id);
      }
    });
  }
  deleteQuiz(quizId:string){
    this._QuizesService.deleteQuiz(quizId).subscribe({
      next: (res) => {
        console.log(res);
        this.tostar.success('question deleted');
      },
      error: (err) => {
        this.tostar.error(err.message, 'Error');
      },
      complete: () => {
        this.getAllquizes();
      },
    });
  }
}
