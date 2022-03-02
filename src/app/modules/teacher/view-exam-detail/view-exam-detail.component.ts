import { ToastrService } from 'ngx-toastr';
import { ITeacherViewExamDetails } from 'src/app/shared/interfaces/teacher.interface';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.viewExamDetails();
  }

  public viewExamDetails(): void {
    const viewExamDetail: ITeacherViewExamDetails =
      this.activatedRoute.snapshot.data['viewExamDetail'];

    if (viewExamDetail.statusCode === 200) {
      this.examDetailsQuestions = viewExamDetail?.data?.questions;
      this.toastrService.success(viewExamDetail.message, 'Success');
    } else {
      this.toastrService.error(viewExamDetail.message, 'Failed');
    }
  }
}
