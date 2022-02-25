import { SpinnerService } from './../../../shared/services/spinner.service';
import { ITeacherViewExamDetails } from './../../../shared/interfaces/teacher.interface';
import { ViewExamDetailComponent } from './../view-exam-detail/view-exam-detail.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  ITeacherViewExamData,
  ITeacherViewExamResponse,
} from 'src/app/shared/interfaces/teacher.interface';
@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examsList: ITeacherViewExamData[] = [];
  public examsNotes: string[] = [];

  constructor(
    private userService: UserService,
    public toastrService: ToastrService,
    private ngbModalService: NgbModal,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.displaySpinner(true);
  }

  ngOnInit(): void {
    this.userService
      .viewExam()
      .subscribe((response: ITeacherViewExamResponse): void => {
        if (response.statusCode == 200) {
          this.spinnerService.displaySpinner(false);
          this.examsList = response?.data;
          this.examsNotes = response.data[0]?.notes;
          this.toastrService.success(response.message, 'Success');
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }

  public viewExamDetails(examId: string): void {
    this.userService
      .viewExamsDetails(examId)
      .subscribe((response: ITeacherViewExamDetails): void => {
        const modalRef = this.ngbModalService.open(ViewExamDetailComponent);
        modalRef.componentInstance.examData = response.data?.questions;
      });
  }
}
