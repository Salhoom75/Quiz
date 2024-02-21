import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { IQuiztable } from '../../../quizes/models/quiz';
import { IcompletedQuiz } from '../../models/results';
import { GroupService } from '../../../groups/services/group.service';
import { Group } from '../../../groups/models/group';
import { QuizesService } from '../../../quizes/services/quizes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  completedQuizzes:IcompletedQuiz[]=[]
  groupName:string='';
  numerOfStudents:number|undefined=0;
  group?:Group;
constructor(private _ResultsService:ResultsService,private _GroupService: GroupService
  ,private _QuizesService:QuizesService){

}
ngOnInit(): void {
  this.getCompletedQuizzes()
}
getCompletedQuizzes(){
  this._QuizesService.completedQuizzes().subscribe({
    next:(res)=>{
      console.log(res);
      
      this.completedQuizzes=res
      for(let Q of this.completedQuizzes){
          this.getGroupById(Q.group)
      }

    },error:(err)=>{

    },complete:()=> {
      
    }
  })
}

getGroupById(id:string){
  this._GroupService.getGroupbyId(id).subscribe({
    next:(res)=>{
      console.log(res);
     this.group=res;
     this.groupName=res.name
     this.numerOfStudents=this.group?.students.length
    },error:(err)=>{

    },complete:()=> {
      
    }
  })
}
}
