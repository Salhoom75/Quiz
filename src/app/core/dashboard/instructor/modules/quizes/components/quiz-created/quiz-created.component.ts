
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-quiz-created',
  templateUrl: './quiz-created.component.html',
  styleUrls: ['./quiz-created.component.scss']
})
export class QuizCreatedComponent {
  constructor( 
    private _Toastr:ToastrService,
    public dialogRef: MatDialogRef<QuizCreatedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){}

    copyCode(){
     this._Toastr.success('Code copied to your clipboard');
     this.onNoClick()
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
