import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizeStudentService } from '../../services/quize-student.service';
import { IQuistions,  Options } from '../../models/iquiz-student';
import { Ianswer } from '../../models/ianswer';
import { ToastrService } from 'ngx-toastr';
import { map, takeWhile, timer } from 'rxjs';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit{
  QuizId:string='';
  options!:Options[];
  questions:IQuistions[]=[]
  answers:Ianswer[]=[]

  timeRemaining$:any;
  @Input()  seconds=0

  
  constructor(private _ActivatedRoute:ActivatedRoute,
    private _QuizStudentService:QuizeStudentService,private _Toastr:ToastrService,
    private _Router:Router){
_ActivatedRoute.queryParams.subscribe(params => {
 this.QuizId=params['quiz']
})
console.log(this.QuizId);

  }
ngOnInit(): void {
  this.getQuestions(this.QuizId);

}
getQuestions(id:string){
  this._QuizStudentService.getQuestionsWiyhoutAnswer(id).subscribe({
    next:(res:any)=>{
      console.log(res);
         this.seconds=(res.data.duration)*60 
        this.timeRemaining$ = timer(0, 1000).pipe(
          map(n => (this.seconds - n) * 1000),
          takeWhile(n => n >= 0)
          
        );
      
this.questions=res.data.questions
    
      console.log(this.questions);
      
  }
  })
}

  firstFormGroup = new FormGroup({
      answer:new FormControl(null)
  })
 
 addAnswers(form:FormGroup,question:string){
  console.log(form.value);
  let answer=form.value.answer
  this.answers.push({question,answer})
  console.log(this.answers);
  
 }
 submitAnswers(){
  this._QuizStudentService.submitAnswer(this.QuizId,this.answers).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:(err)=>{
this._Toastr.error(err.error.message)
    },complete:()=> {
      this._Toastr.success("you have submitted your answers")
      this._Router.navigate(['/dashboard/student/quizes'])
    }
  })
 }
  resetForm(){
    this.answers=[]
  }


}
