import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'quizes',
    loadChildren: () =>
      import('../student/modules/quizes/quizes.module').then(
        (m) => m.QuizesModule
      ),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('../student/modules/results/results.module').then(
        (m) => m.ResultsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
