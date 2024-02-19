import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from '../../services/instructor.service';
import { Student } from '../../modules/students/models/student';
import { QuizesService } from '../../modules/quizes/services/quizes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  IncomingStudents: any;
  userId: string;
  topStudents: Student[] = [];
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _InstructorService: InstructorService,
    private _QuizesService: QuizesService
  ) {
    this.userId = _ActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getTopStudents();
    this.getFiveIncommingStudents();
  }
  getTopStudents() {
    this._InstructorService.getTopFiveStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.topStudents = res;
      },
    });
  }
  getFiveIncommingStudents() {
    this._QuizesService.getFiveIncommingStudents().subscribe({
      next: (res) => {
        console.log(res);
        this.IncomingStudents = res;
      },
    });
  }
}
