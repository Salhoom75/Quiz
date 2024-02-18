import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuizeStudentService } from '../../services/quize-student.service';
import { IQuizStudent, Options } from '../../models/iquiz-student';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit{
  QuizId:string='';
  options!:Options[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _QuizStudentService:QuizeStudentService){
_ActivatedRoute.queryParams.subscribe(params => {
 this.QuizId=params['quiz']
})
console.log(this.QuizId);

  }
ngOnInit(): void {
  this.getQuestions(this.QuizId)
}
getQuestions(id:string){
  this._QuizStudentService.getQuestionsWiyhoutAnswer(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.options=res.data.questions[0].options
      console.log(this.options);
      
  }
  })
}
  firstFormGroup = new FormGroup({
A:new FormControl(null)
  })
  secondFormGroup = new FormGroup({
    
  })
  favoriteSeason?: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
}
