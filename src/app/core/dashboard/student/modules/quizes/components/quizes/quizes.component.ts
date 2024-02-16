import { Component, OnInit } from '@angular/core';
import { QuizesService } from 'src/app/core/dashboard/instructor/modules/quizes/services/quizes.service';
import { QuizeStudentService } from '../../services/quize-student.service';

@Component({
  selector: 'app-quizes',
  templateUrl: './quizes.component.html',
  styleUrls: ['./quizes.component.scss']
})
export class QuizesComponent implements OnInit{
  quizzes:any[]=[]
constructor(private _QuizService:QuizeStudentService){}

ngOnInit(): void {
  this.getIncoming5Quizzes()
}
getIncoming5Quizzes(){
this._QuizService.getFirst5IncomingQuizzes().subscribe({
  next:(res)=>{
    console.log(res);
    this.quizzes=res
  }
})
}
}
