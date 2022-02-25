import { ToastrService } from 'ngx-toastr';
import { SpinnerService } from './../../../shared/services/spinner.service';
import { ITeacherViewExamDetails } from './../../../shared/interfaces/teacher.interface';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ITeacherViewExamQuestionData } from 'src/app/shared/interfaces/teacher.interface';

@Component({
  selector: 'app-view-exam-detail',
  templateUrl: './view-exam-detail.component.html',
  styleUrls: ['./view-exam-detail.component.scss'],
})
export class ViewExamDetailComponent implements OnInit {
  public examDetailsQuestions: ITeacherViewExamQuestionData[] = [];
  public getExamId = this.activatedRoute.snapshot.params['examId'];
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private spinnerService: SpinnerService,
    private toastrService: ToastrService
  ) {
    this.spinnerService.displaySpinner(true);
  }

  ngOnInit(): void {
    this.viewExamDetails();
  }

  public viewExamDetails() {
    this.userService
      .viewExamsDetails(this.getExamId)
      .subscribe((response: ITeacherViewExamDetails) => {
        if (response.statusCode === 200) {
          this.examDetailsQuestions = response.data.questions;
          this.spinnerService.displaySpinner(false);
          this.toastrService.success(response.message, 'Success');
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }

}
