import { StudentListResolver } from '../../shared/resolve/teacher-resolve/student-list.resolver';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student-list/student-list.component';
import { VerifyStudentComponent } from './verify-student/verify-student.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ViewExamDetailComponent } from './view-exam-detail/view-exam-detail.component';
import { ViewExamResolver } from 'src/app/shared/resolve/teacher-resolve/view-exam.resolver';
import { VerifyStudentResolver } from 'src/app/shared/resolve/teacher-resolve/verify-student.resolver';
import { ViewExamDetailResolver } from 'src/app/shared/resolve/teacher-resolve/view-exam-detail.resolver';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'view-exam',
    component: ViewExamComponent,
    resolve: { viewExam: ViewExamResolver },
  },
  {
    path: 'student-list',
    component: StudentListComponent,
    resolve: { studentList: StudentListResolver },
  },
  {
    path: 'verify-student',
    component: VerifyStudentComponent,
    resolve: { verifyStudent: VerifyStudentResolver },
  },
  {
    path: 'view-exam-detail/:examId',
    component: ViewExamDetailComponent,
    resolve: { viewExamDetail: ViewExamDetailResolver },
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
