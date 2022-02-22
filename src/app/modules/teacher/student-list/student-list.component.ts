import { ViewStudentDetailComponent } from './../view-student-detail/view-student-detail.component';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../core/services/user.service';
import { Component, OnInit } from '@angular/core';
import { studentList } from 'src/app/core/interfaces/login.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  public studentList: studentList[] = [];
  public spinner: boolean = true;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private ngbModalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.userService.getStudentsData().subscribe((response) => {
      console.log('response :>> ', response);
      if (response.statusCode == 200) {
        this.studentList = response.data;
        this.spinner = false;
        this.toastrService.success(response.message);
      }
    });
  }

  public showsStudentProfile(_id: any): void {
    this.userService.studentProfileById(_id).subscribe((response: any) => {
      console.log('response :>> ', response);
      const modalRef = this.ngbModalService.open(ViewStudentDetailComponent);
      modalRef.componentInstance.studentData = response.data;
      modalRef.componentInstance.studentResultData = response.data[0].Result;
    });
  }
}
