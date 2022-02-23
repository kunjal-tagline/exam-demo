import { ToastrService } from 'ngx-toastr';
import { StudentExamListResponse } from './../../../shared/interfaces/response.interface';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-exam-list',
  templateUrl: './student-exam-list.component.html',
  styleUrls: ['./student-exam-list.component.scss'],
})
export class StudentExamListComponent implements OnInit {
  public studentExamListData: Array<any> = [];
  public spinner: boolean = true;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService
      .studentExamList()
      .subscribe((response: StudentExamListResponse) => {
        console.log('response :>> ', response);
        if (response.statusCode === 200) {
          this.toastrService.success(response.message, 'Sucess');
          this.studentExamListData = response.data;
          this.spinner = false;
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }

  
}
