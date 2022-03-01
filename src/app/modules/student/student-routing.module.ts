import { ViewExamPaperResolver } from 'src/app/shared/resolve/student-resolve/view-exam-paper.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentExamListResolver } from 'src/app/shared/resolve/student-resolve/student-exam-list.resolver';
import { StudentProfileResolver } from 'src/app/shared/resolve/student-resolve/student-profile.resolver';
import { StudentDashboardComponent } from 'src/app/modules/student/student-dashboard/student-dashboard.component';
import { StudentExamListComponent } from 'src/app/modules/student/student-exam-list/student-exam-list.component';
import { StudentProfileComponent } from 'src/app/modules/student/student-profile/student-profile.component';
import { ViewExamPaperComponent } from 'src/app/modules/student/view-exam-paper/view-exam-paper.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: StudentDashboardComponent,
  },
  {
    path: 'student-profile',
    component: StudentProfileComponent,
    resolve: { viewStudentProfile: StudentProfileResolver },
  },
  {
    path: 'student-exam-list',
    component: StudentExamListComponent,
    resolve: { studentExamList: StudentExamListResolver },
  },
  {
    path: 'view-exam-paper/:id',
    component: ViewExamPaperComponent,
    resolve: { viewExamPaper: ViewExamPaperResolver },
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
