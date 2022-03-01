import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {
  IStudentExamData,
  IStudentExamListResponse,
} from 'src/app/shared/interfaces/student.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-exam-list',
  templateUrl: './student-exam-list.component.html',
  styleUrls: ['./student-exam-list.component.scss'],
})
export class StudentExamListComponent implements OnInit {
  public studentExamListData: IStudentExamData[] = [];

  constructor(
    private toastrService: ToastrService,
    private route: Router,
    private spinnerService: SpinnerService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getStudentExamList();
  }

  public getStudentExamList(): void {
    this.spinnerService.displaySpinner(true);

    const studentExamList: IStudentExamListResponse =
      this.activatedRoute.snapshot.data['studentExamList'];

    if (studentExamList.statusCode === 200) {
      this.toastrService.success(studentExamList.message, 'Success');
      this.studentExamListData = studentExamList?.data;
      this.spinnerService.displaySpinner(false);
    } else {
      this.toastrService.error(studentExamList.message, 'Failed');
    }
  }

  public viewExamPaperDetail(id: string): void {
    this.route.navigate(['/student/view-exam-paper', id]);
  }
}
