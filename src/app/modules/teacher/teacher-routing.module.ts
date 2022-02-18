import { TeacherLayoutComponent } from './teacher-layout/teacher-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { VerifyStudentComponent } from '../verify-student/verify-student.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherLayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'student-list',
        component: StudentListComponent,
      },
      {
        path: 'verify-student',
        component: VerifyStudentComponent,
      },
      {
        path:'**',
        redirectTo:'dashboard'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
