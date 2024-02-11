import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './components/results/results.component';
import { ViewResultComponent } from './components/view-result/view-result.component';


@NgModule({
  declarations: [
    ResultsComponent,
    ViewResultComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
