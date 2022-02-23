import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { StudentExamListComponent } from './student-exam-list/student-exam-list.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudentProfileComponent,
    StudentExamListComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    CoreModule
  ]
})
export class StudentModule { }
