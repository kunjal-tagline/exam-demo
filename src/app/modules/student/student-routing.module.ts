import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentExamListComponent } from './student-exam-list/student-exam-list.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: 'student-profile',
    component: StudentProfileComponent,
  },
  {
    path: 'student-exam-list',
    component: StudentExamListComponent,
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
export class StudentRoutingModule {}
