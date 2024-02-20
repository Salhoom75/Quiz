import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { instructorGuard } from '../guards/instructor.guard';
import { studentGuard } from '../guards/student.guard';
import { TestComponent } from './components/test/test.component';
import { EditProfileComponent } from 'src/app/shared/edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'instructor',
        canActivate: [instructorGuard],
        loadChildren: () =>
          import('../dashboard/instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },
      {
        path: 'student',
        canActivate: [studentGuard],
        loadChildren: () =>
          import('../dashboard/student/student.module').then(
            (m) => m.StudentModule
          ),
      },
      { path: 'edit-profile', component: EditProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
