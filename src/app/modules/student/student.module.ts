import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from 'src/app/modules/student/student-routing.module';
import { StudentProfileComponent } from 'src/app/modules/student/student-profile/student-profile.component';
import { StudentExamListComponent } from 'src/app/modules/student/student-exam-list/student-exam-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { ViewExamPaperComponent } from 'src/app/modules/student/view-exam-paper/view-exam-paper.component';
import { StudentDashboardComponent } from 'src/app/modules/student/student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentProfileComponent,
    StudentExamListComponent,
    ViewExamPaperComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, CoreModule],
})
export class StudentModule {}
