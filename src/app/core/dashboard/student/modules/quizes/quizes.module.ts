import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesComponent } from './components/quizes/quizes.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { JoinQuizComponent } from './components/quizes/join-quiz/join-quiz.component';
import { QuizCodeComponent } from './components/quizes/quiz-code/quiz-code.component';

@NgModule({
  declarations: [QuizesComponent, JoinQuizComponent, QuizCodeComponent],
  imports: [CommonModule, QuizesRoutingModule, SharedModule],
})
export class QuizesModule {}
