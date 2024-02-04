import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesComponent } from './components/quizes/quizes.component';
import { SetUpQuizComponent } from './components/set-up-quiz/set-up-quiz.component';



@NgModule({
  declarations: [
    QuizesComponent,
    SetUpQuizComponent
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule
  ]
})
export class QuizesModule { }
