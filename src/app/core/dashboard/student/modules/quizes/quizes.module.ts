import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizesComponent } from './components/quizes/quizes.component';


@NgModule({
  declarations: [
    QuizesComponent
  ],
  imports: [
    CommonModule,
    QuizesRoutingModule
  ]
})
export class QuizesModule { }
