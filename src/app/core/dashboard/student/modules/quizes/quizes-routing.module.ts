import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizesComponent } from './components/quizes/quizes.component';
import { ExamComponent } from './components/exam/exam.component';

const routes: Routes = [
 
  {path:'', component:QuizesComponent},
  {path:'exam', component:ExamComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule { }
