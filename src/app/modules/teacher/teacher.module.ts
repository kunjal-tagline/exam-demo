import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewExamComponent } from './view-exam/view-exam.component';
import { StudentListComponent } from './student-list/student-list.component';

@NgModule({
  declarations: [DashboardComponent, ViewExamComponent, StudentListComponent],
  imports: [CommonModule, TeacherRoutingModule],
})
export class TeacherModule {}
