import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  StudentProfileResponse,
  StudentProfileDataInterface,
} from 'src/app/shared/interfaces/student.interface';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentProfileData: StudentProfileDataInterface[] = [];

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService
      .viewStudentProfile()
      .subscribe((response: StudentProfileResponse) => {
        if (response.statusCode === 200) {
          this.toastrService.success(response.message, 'Success');
          this.studentProfileData = [response.data];
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }
}
