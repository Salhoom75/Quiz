import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesComponent } from './components/quizes/quizes.component';
import { SharedModule } from '../../../../../shared/shared.module';

@NgModule({
  declarations: [QuizesComponent],
  imports: [CommonModule, QuizesRoutingModule, SharedModule],
})
export class QuizesModule {}
