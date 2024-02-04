import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizesComponent } from './components/quizes/quizes.component';
import { SetUpQuizComponent } from './components/set-up-quiz/set-up-quiz.component';

const routes: Routes = [
  {path:'', component: QuizesComponent},
  {path:'set-up-quiz', component: SetUpQuizComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule { }
