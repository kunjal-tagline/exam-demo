import { ViewExamComponent } from './view-exam/view-exam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { CreateExamComponent } from './create-exam/create-exam.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'view-exam',
    component: ViewExamComponent,
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
    path: 'create-exam',
    component: CreateExamComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule {}
