import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizesComponent } from './components/quizes/quizes.component';
import { SetUpQuizComponent } from './components/set-up-quiz/set-up-quiz.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';

const routes: Routes = [
  { path: '', component: QuizesComponent },
  { path: 'set-up-quiz', component: SetUpQuizComponent },
  { path: 'quiz-detalis', component: QuizDetailsComponent },
  {
    path:'questions', loadChildren: () => import('./modules/questions/questions.module').then(m=> m.QuestionsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizesRoutingModule {}
