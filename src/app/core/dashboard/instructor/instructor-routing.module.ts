import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  {
    path: 'groups',
    loadChildren: () =>
      import('./modules/groups/groups.module').then((m) => m.GroupsModule),
  },
  {
    path: 'quizes',
    loadChildren: () =>
      import('./modules/quizes/quizes.module').then((m) => m.QuizesModule),
  },
  {
    path: 'results',
    loadChildren: () =>
      import('./modules/results/results.module').then((m) => m.ResultsModule),
  },
  {
    path: 'students',
    loadChildren: () =>
      import('./modules/students/students.module').then(
        (m) => m.StudentsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorRoutingModule {}
