import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';
import { Student } from '../../modules/students/models/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userId: string;
  topStudents:Student[]=[]
  constructor(private _ActivatedRoute: ActivatedRoute,private _InstructorService:InstructorService) {
    this.userId = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getTopStudents()
  }
  getTopStudents(){
    this._InstructorService.getTopFiveStudents().subscribe({
      next:(res)=>{
        console.log(res);
        this.topStudents=res
      }
    })
  }
}
