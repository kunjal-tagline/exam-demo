import { ActivatedRoute } from '@angular/router';

import {
  IAllStudentDataResponse,
  IStudentData,
  ITeacherViewProfileResponse,
} from 'src/app/shared/interfaces/teacher.interface';
import { ViewStudentDetailComponent } from 'src/app/modules/teacher/view-student-detail/view-student-detail.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';
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
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.studentDataGet();
  }

  public studentDataGet(): void {
    const studentList: IAllStudentDataResponse =
      this.activatedRoute.snapshot.data['studentList'];

    if (studentList.statusCode === 200) {
      this.toastrService.success(studentList.message, 'Success');
      this.studentList = studentList?.data;
    } else {
      this.toastrService.error(studentList.message, 'Failed');
    }
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
