import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { ViewResultComponent } from './components/view-result/view-result.component';

const routes: Routes = [
  {path:'', component: ResultsComponent},
  {path:'view-result/:id', component: ViewResultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
