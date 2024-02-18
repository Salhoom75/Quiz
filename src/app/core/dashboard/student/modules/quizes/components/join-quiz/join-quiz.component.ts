import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { QuizeStudentService } from '../../services/quize-student.service';
import { QuizCodeComponent } from '../quiz-code/quiz-code.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-quiz',
  templateUrl: './join-quiz.component.html',
  styleUrls: ['./join-quiz.component.scss'],
})
export class JoinQuizComponent {
  Message: any;
  codeResult:any;
  joinQuizForm = new FormGroup({
    code: new FormControl(null),
  });
  constructor(
    private _QuizeStudentService: QuizeStudentService,
    public dialogRef: MatDialogRef<JoinQuizComponent>,
    private _ToastrService: ToastrService,
    private dialog: MatDialog,
    private _Router:Router
  ) {}

  

  onsubmit(code: any) {
    this._QuizeStudentService.joinQuiz(code.value).subscribe({
      next: (res: any) => {
        console.log(res.data.quiz);
        this.codeResult=res
        this.Message = res.data.message;
      },
      error: (err: any) => {
        this._ToastrService.error(err.error.message)
      },
      complete: () => {
        this.onNoClick();
        this._Router.navigate(['/dashboard/student/quizes/exam'],{queryParams:{quiz:this.codeResult.data.quiz}})
      },
    });
  }

  JoinCodeResult(): void {
    const dialogRef = this.dialog.open(QuizCodeComponent, {
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
  joinquiz(code: string) {
    this._QuizeStudentService.joinQuiz(code).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
