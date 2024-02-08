import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { instructorGuard } from '../guards/instructor.guard';
import { studentGuard } from '../guards/student.guard';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
       {path:'',redirectTo:'instructor',pathMatch:'full'},
      {
        path: 'instructor',
            canActivate: [instructorGuard],
        loadChildren: () =>
          import('./instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },

      {
        path: 'student',
        //  canActivate: [studentGuard],
        loadChildren: () =>
          import('./student/student.module').then((m) => m.StudentModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
