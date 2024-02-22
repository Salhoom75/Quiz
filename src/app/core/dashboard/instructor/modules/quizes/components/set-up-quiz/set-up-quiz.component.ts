import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { QuizCreatedComponent } from '../quiz-created/quiz-created.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../groups/models/group';
import { QuizesService } from '../../services/quizes.service';
import { ToastrService } from 'ngx-toastr';
import { Quiz } from '../../models/quiz';

@Component({
  selector: 'app-set-up-quiz',
  templateUrl: './set-up-quiz.component.html',
  styleUrls: ['./set-up-quiz.component.scss'],
})
export class SetUpQuizComponent implements OnInit {
  allGroups: Group[] = [];
  numberQuestions: number[] = [];
  questionCode: string = '';
  isView: boolean = false;
  isAddQuiz: boolean = false;
  isEditQuiz: boolean = false;
  isReassignQuiz: boolean = false;
  isActiveQuiz: string = '';
  constructor(
    public dialog: MatDialog,
    private _GroupService: GroupService,
    private _QuizesService: QuizesService,
    private _Toastr: ToastrService,
    public dialogRef: MatDialogRef<SetUpQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log(data);
    this.isView = data.viewQuiz;
    this.isEditQuiz = data.editQuiz;
    this.isAddQuiz = data.addQuiz;
    this.isActiveQuiz = data.isActive;
    if (this.isActiveQuiz == 'closed') {
      this.isReassignQuiz = true;
      this.isEditQuiz = false;
    } else if(this.isActiveQuiz == 'open'){
      this.isReassignQuiz = false;
      this.isEditQuiz = true;
    }
  }
  ngOnInit(): void {
    if (this.data.quizData) {
      this.quizForm.patchValue(this.data.quizData);
      if (this.isView == true) {
        this.isReassignQuiz = false;
        this.isEditQuiz = false;
        this.quizForm.disable();
      }
    }

    this.getAllGroups();
    this.generateNumbersQuestion();
  }
  quizForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    group: new FormControl(null, [Validators.required]),
    questions_number: new FormControl(null, [Validators.required]),
    difficulty: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    schadule: new FormControl(null, [Validators.required]),
    duration: new FormControl(null, [Validators.required]),
    score_per_question: new FormControl(null, [Validators.required]),
  });

  submit(form: FormGroup) {
    console.log(form.value);
    //add mode
    if (this.isAddQuiz == true) {
      this.addQuiz(form.value);
    }
    //statuse is open so edit
    else if (this.isEditQuiz == true) {

      this.editQuiz(this.data.quizData._id, form.value.title);
    }
    //statuse is closed so reassign
    else if (this.isReassignQuiz == true) {
      let params = {

        schadule: form.value.schadule,
        duration: form.value.duration

    }
      this.reassignQuiz(this.data.quizData._id,params);
    } else{

      this.onClose();

    }
  }

  //add quiz
  addQuiz(data: Quiz) {
    this._QuizesService.createQuiz(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.questionCode = res.data.code;
        this._Toastr.success('quiz created Succesfully');
      },
      error: (err) => {
        console.log(err);
        if (typeof err.error.message === 'string') {
          this._Toastr.error(err.error.message);
        } else {
          err.error.message.forEach((errMsg: string | undefined) => {
            this._Toastr.error(errMsg);
          });
        }
      },
      complete: () => {
        this.openDialog(this.questionCode);
      },
    });
  }
  //edit quiz
  editQuiz(quizId: string, data: any) {
    this._QuizesService.updateQuiz(quizId, data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.questionCode = res.data.code;
        this._Toastr.success('quiz updated Succesfully');
      },
      error: (err) => {
        console.log(err.error.message);
        if (typeof err.error.message === 'string') {
          this._Toastr.error(err.error.message);
        } else {
          err.error.message.forEach((errMsg: string | undefined) => {
            this._Toastr.error(errMsg);
          });
        }
      },
      complete: () => {
        this.openDialog(this.questionCode);
      },
    });
  }
  //reassign quiz
  reassignQuiz(quizId: string, data: any) {
    this._QuizesService.reassignQuiz(quizId, data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.questionCode = res.data.code;
        this._Toastr.success('quiz reassigned Succesfully');
      },
      error: (err) => {
        console.log(err.error.message);
        if (typeof err.error.message === 'string') {
          this._Toastr.error(err.error.message);
        } else {
          err.error.message.forEach((errMsg: string | undefined) => {
            this._Toastr.error(errMsg);
          });
        }
      },
      complete: () => {
        this.openDialog(this.questionCode);
      },
    });
  }
  getAllGroups() {
    this._GroupService.getAllGroups().subscribe({
      next: (res) => {
        console.log(res);
        this.allGroups = res;
      },
    });
  }

  openDialog(data: string): void {
    this.onClose();
    const dialogRef = this.dialog.open(QuizCreatedComponent, {
      data: data,
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
  generateNumbersQuestion() {
    for (let i = 1; i < 10; i++) {
      this.numberQuestions.push(i);
    }
    console.log(this.numberQuestions);
  }
  onClose() {
    this.dialogRef.close();
  }
}
