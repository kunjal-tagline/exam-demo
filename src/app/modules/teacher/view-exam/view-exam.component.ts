import { ViewExamDetailComponent } from './../view-exam-detail/view-exam-detail.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-view-exam',
  templateUrl: './view-exam.component.html',
  styleUrls: ['./view-exam.component.scss'],
})
export class ViewExamComponent implements OnInit {
  public examsList: any = [];
  public examsNotes: any = [];
  constructor(
    private userService: UserService,
    public toastrService: ToastrService,
    private ngbModalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userService.viewExam().subscribe((response: any) => {
      console.log('response :>> ', response);
      if (response.statusCode == 200) {
        this.examsList = response.data;
        this.examsNotes = response.data[0].notes;
        //console.log('this.examsList :>> ', this.examsList);
        this.toastrService.success(response.message, 'Success');
      } else {
        this.toastrService.error(response.message, 'Failed');
      }
    });
  }

  public viewExamDetails(examId: string) {
    this.userService.viewExamsDetails(examId).subscribe((response: any) => {
      // console.log('response :>> ', response);
      const modalRef = this.ngbModalService.open(ViewExamDetailComponent);
      modalRef.componentInstance.examData = response.data.questions;
    });
  }

  public editExam(id: string) {}
}
