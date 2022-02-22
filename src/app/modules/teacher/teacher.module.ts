import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewStudentDetailComponent } from './view-student-detail/view-student-detail.component';
import { CreateExamComponent } from './create-exam/create-exam.component';
import { ViewExamDetailComponent } from './view-exam-detail/view-exam-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { StudentListComponent } from './student-list/student-list.component';
import { VerifyStudentComponent } from './verify-student/verify-student.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewStudentDetailComponent,
    CreateExamComponent,
    ViewExamDetailComponent,
    ViewExamComponent,
    StudentListComponent,
    VerifyStudentComponent
  ],
  imports: [CommonModule, TeacherRoutingModule, CoreModule,FormsModule,ReactiveFormsModule],
})
export class TeacherModule {}
