import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  IStudentExamData,
  IStudentExamListResponse,
} from '../../../shared/interfaces/student.interface';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-exam-list',
  templateUrl: './student-exam-list.component.html',
  styleUrls: ['./student-exam-list.component.scss'],
})
export class StudentExamListComponent implements OnInit {
  public studentExamListData: IStudentExamData[] = [];
  public spinner: boolean = true;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.userService
      .studentExamList()
      .subscribe((response: IStudentExamListResponse): void => {
        if (response.statusCode === 200) {
          this.toastrService.success(response.message, 'Sucess');
          this.studentExamListData = response?.data;
          this.spinner = false;
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }

  public viewExamPaperDetail(id: string): void {
    this.route.navigate(['/student/view-exam-paper', id]);
  }
}
