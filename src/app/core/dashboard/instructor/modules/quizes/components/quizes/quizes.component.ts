import { Component } from '@angular/core';
import { SetUpQuizComponent } from '../set-up-quiz/set-up-quiz.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss']
})
export class QuizesComponent {
 constructor(public dialog: MatDialog,){

 }


  startQuiz(){
    const dialogRef = this.dialog.open(SetUpQuizComponent, {
      data: {},
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if(result){
        
      }
    });
  }
}
