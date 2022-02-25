import { SpinnerService } from './../../../shared/services/spinner.service';
import {
  IAllStudentDataResponse,
  IStudentData,
  ITeacherViewProfileResponse,
} from './../../../shared/interfaces/teacher.interface';
import { ViewStudentDetailComponent } from './../view-student-detail/view-student-detail.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  public studentList: IStudentData[] = [];

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private ngbModalService: NgbModal,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.displaySpinner(true);
  }

  ngOnInit(): void {
    this.userService
      .getStudentsData()
      .subscribe((response: IAllStudentDataResponse): void => {
        if (response.statusCode == 200) {
          this.spinnerService.displaySpinner(false);
          this.toastrService.success(response.message, 'Success');
          this.studentList = response?.data;
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }

  public showsStudentProfile(_id: number): void {
    this.userService
      .studentProfileById(_id)
      .subscribe((response: ITeacherViewProfileResponse): void => {
        const modalRef = this.ngbModalService.open(ViewStudentDetailComponent);
        modalRef.componentInstance.studentData = response?.data;
        modalRef.componentInstance.studentResultData = response?.data[0].Result;
      });
  }
}
