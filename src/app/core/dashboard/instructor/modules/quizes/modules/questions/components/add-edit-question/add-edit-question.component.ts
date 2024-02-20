import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { QuestionsService } from '../../services/questions.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-question',
  templateUrl: './add-edit-question.component.html',
  styleUrls: ['./add-edit-question.component.scss'],
})
export class AddEditQuestionComponent {
  questionData: any;
  isView: boolean = false;
  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AddEditQuestionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _QuestionService: QuestionsService,
    private _Toastr: ToastrService
  ) {
    console.log(data);
    if (data) {
      this.getQuestionbyId(data.id);
      if (this.data.view) {
        console.log('view');
        this.isView = true;
        this.questionForm.disable();
      }
    }
  }

  questionForm = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    options: new FormGroup({
      A: new FormControl(null, [Validators.required]),
      B: new FormControl(null, [Validators.required]),
      C: new FormControl(null, [Validators.required]),
      D: new FormControl(null, [Validators.required]),
    }),
    answer: new FormControl(null, [Validators.required]),
    difficulty: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
  });

  onSubmit(form: FormGroup) {
    if (this.data) {
      this.updateQuestion(this.data.id, form.value);
    } else {
      this._QuestionService.addQuestion(form.value).subscribe({
        next: (res) => {
          console.log(res);
          this._Toastr.success(res.message);
        },
        error: (err) => {
          this._Toastr.error(err.error.message);
        },
        complete: () => {
          this.onClose();
        },
      });
    }
  }

  getQuestionbyId(id: string) {
    this._QuestionService.getQuestionById(id).subscribe({
      next: (res) => {
        console.log(res);
        this.questionData = res;
      },
      error: (err) => {},
      complete: () => {
        this.questionForm.patchValue(this.questionData);
      },
    });
  }

  updateQuestion(id: string, data: string) {
    this._QuestionService.updateQuestion(id, data).subscribe({
      next: (res) => {
        console.log(res);
        this._Toastr.success('question updated succesfully');
      },
      error: (err) => {
        this._Toastr.error(err.error.message);
      },
      complete: () => {
        this.onClose();
      },
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
