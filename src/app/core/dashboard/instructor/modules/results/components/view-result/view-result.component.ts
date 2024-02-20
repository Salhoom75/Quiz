import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizesService } from '../../../quizes/services/quizes.service';
import { ResultsService } from '../../services/results.service';
import {  IResults, Participant } from '../../models/results';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit{
  quizId:string='';
  quizTitle:string='';
  participants:Participant[]=[];
  results:IResults[]=[];
constructor(private _ActivatedRoute:ActivatedRoute,private _QuizesService:QuizesService,private _ResultsService:ResultsService){
this.quizId=_ActivatedRoute.snapshot.paramMap.get('id')!;

}
ngOnInit(): void {
  
  this.getQuizbyId()
  this.getAllResults()
}

getQuizbyId(){
  this._QuizesService.getQuizById(this.quizId).subscribe({
    next:(res)=>{
      console.log(res);
      this.quizTitle=res.title
    },error:(err)=>{

    },complete:()=> {
      
    }
  })
}
getAllResults(){
  this._ResultsService.allResult().subscribe({
    next:(res)=>{
      console.log(res);
      this.results=res
      for(let res of this.results)
      this.participants=res.participants
    },error:(err)=>{

    },complete:()=> {
      
    }
  })
}
}
