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

@Component({
  selector: 'app-set-up-quiz',
  templateUrl: './set-up-quiz.component.html',
  styleUrls: ['./set-up-quiz.component.scss'],
})
export class SetUpQuizComponent implements OnInit {
  allGroups: Group[] = [];
  myObject: number[] = [];
  questionCode: string = '';
  constructor(
    public dialog: MatDialog,
    private _GroupService: GroupService,
    private _QuizesService: QuizesService,
    private _Toastr: ToastrService,
    public dialogRef: MatDialogRef<SetUpQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    for (let i = 1; i < 30; i++) {
      i = i + 2;
      this.myObject.push(i);
      1;
    }
  }
  ngOnInit(): void {
    this.getAllGroups();
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
    this._QuizesService.createQuiz(form.value).subscribe({
      next: (res) => {
        console.log(res);
        this.questionCode = res.data.code;
        this._Toastr.success('quiz created Succesfully');
      },
      error: (err) => {
        this._Toastr.error(err.error);
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
  onClose() {
    this.dialogRef.close();
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
}
