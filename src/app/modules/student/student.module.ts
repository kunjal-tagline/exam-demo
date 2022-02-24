import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentExamListComponent } from './student-exam-list/student-exam-list.component';
import { CoreModule } from 'src/app/core/core.module';
import { ViewExamPaperComponent } from './view-exam-paper/view-exam-paper.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentProfileComponent,
    StudentExamListComponent,
    ViewExamPaperComponent,
  ],
  imports: [CommonModule, StudentRoutingModule, CoreModule],
})
export class StudentModule { }
