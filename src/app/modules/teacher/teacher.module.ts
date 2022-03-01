import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRoutingModule } from 'src/app/modules/teacher/teacher-routing.module';
import { ViewStudentDetailComponent } from 'src/app/modules/teacher/view-student-detail/view-student-detail.component';
import { CreateExamComponent } from 'src/app/modules/teacher/create-exam/create-exam.component';
import { ViewExamDetailComponent } from 'src/app/modules/teacher/view-exam-detail/view-exam-detail.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewExamComponent } from 'src/app/modules/teacher/view-exam/view-exam.component';
import { StudentListComponent } from 'src/app/modules/teacher/student-list/student-list.component';
import { VerifyStudentComponent } from 'src/app/modules/teacher/verify-student/verify-student.component';
import { DashboardComponent } from 'src/app/modules/teacher/dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ViewStudentDetailComponent,
    CreateExamComponent,
    ViewExamDetailComponent,
    ViewExamComponent,
    StudentListComponent,
    VerifyStudentComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class TeacherModule {}
