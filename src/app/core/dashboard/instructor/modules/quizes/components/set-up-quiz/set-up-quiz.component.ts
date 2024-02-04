import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-set-up-quiz',
  templateUrl: './set-up-quiz.component.html',
  styleUrls: ['./set-up-quiz.component.scss']
})
export class SetUpQuizComponent {
  
  constructor(
    public dialogRef: MatDialogRef<SetUpQuizComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { let striArr = ['nn','dd',89]

striArr.push(78)}
  onClose(){
    this.dialogRef.close();
  }

 
}
