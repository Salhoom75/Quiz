import { Component, OnInit } from '@angular/core';
import { ResultsStudentService } from '../../services/results-student.service';
import { IResultsStudent } from '../../models/iresults-student';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit{
  studentResults:IResultsStudent[]=[];
constructor(private _ResultsStudentService:ResultsStudentService){}
ngOnInit(): void {
  this.getAllResults()
}
getAllResults(){
  this._ResultsStudentService.getStudentResults().subscribe({
    next:(res)=>{
      console.log(res);
      this.studentResults=res
    },error:(err)=>{

    },complete:()=> {
      
    }
  })
}
}
