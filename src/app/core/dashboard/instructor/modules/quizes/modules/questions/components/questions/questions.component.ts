import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditQuestionComponent } from '../add-edit-question/add-edit-question.component';
import { QuestionsService } from '../../services/questions.service';
import { Iquestion } from '../../models/iquestion';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questionsResponse: Iquestion[] = [];
  constructor(
    public dialog: MatDialog,
    private _questionsService: QuestionsService,
    private tostar: ToastrService
  ) {}
  ngOnInit(): void {
    this.getAllQuestions();
  }
  getAllQuestions() {
    this._questionsService.getAllQuestions().subscribe({
      next: (res) => {
        console.log(res);
        this.questionsResponse = res;
      },
    });
  }

  openDialogAddEdit(): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {

      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getAllQuestions()
      console.log('The dialog was closed');

    });
  }

  openEditDialog(id:string): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {
      data: {id},
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.getAllQuestions()
      console.log(result);
      if (result) {
      }
    });
}
  openViewDialog(id:string,view:boolean): void {
    const dialogRef = this.dialog.open(AddEditQuestionComponent, {
      data: {id,view},
      width: '50%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
      }
    });
  }

  openDialogDelete(data: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { data },
      width: '40%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(data);

      if (result) {
        console.log(result.data._id);
        this.ondelete(result.data._id);
      }
    });
  }
  ondelete(id: string) {
    this._questionsService.deletequestion(id).subscribe({
      next: (res) => {
        console.log(res);
        this.tostar.success('question deleted');
      },
      error: (err) => {
        this.tostar.error(err.message, 'Error');
      },
      complete: () => {
        this.getAllQuestions();
      },
    });
  }
}
