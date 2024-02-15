import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesComponent } from './components/quizes/quizes.component';
import { SetUpQuizComponent } from './components/set-up-quiz/set-up-quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';
import { QuizCreatedComponent } from './components/quiz-created/quiz-created.component';


@NgModule({
  declarations: [
    QuizesComponent,
    SetUpQuizComponent,
    QuizDetailsComponent,
    QuizCreatedComponent

  ],
  imports: [
    CommonModule,
    QuizesRoutingModule,
    SharedModule
  ]
})
export class QuizesModule { }
