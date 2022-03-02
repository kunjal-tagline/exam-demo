import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {
  IStudentExamPaperResponse,
  IStudentViewExamDetails,
} from 'src/app/shared/interfaces/student.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-exam-paper',
  templateUrl: './view-exam-paper.component.html',
  styleUrls: ['./view-exam-paper.component.scss'],
})
export class ViewExamPaperComponent implements OnInit {
  public examPaperData: IStudentViewExamDetails[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.getExamPaper();
  }

  public getExamPaper(): void {
    const viewExamPaper: IStudentExamPaperResponse =
      this.activatedRoute.snapshot.data['viewExamPaper'];
    if (viewExamPaper.statusCode === 200) {
      this.toastrService.success(viewExamPaper.message, 'Success');
      this.examPaperData = viewExamPaper?.data;
    } else {
      this.toastrService.error(viewExamPaper.message, 'Failed');
    }
  }
}
