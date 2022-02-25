import { SpinnerService } from './../../../shared/services/spinner.service';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  ITeacherVerifyStudentsResponse,
  IVerifiedStudentData,
} from 'src/app/shared/interfaces/teacher.interface';

@Component({
  selector: 'app-verify-student',
  templateUrl: './verify-student.component.html',
  styleUrls: ['./verify-student.component.scss'],
})
export class VerifyStudentComponent implements OnInit {
  public VerifyStudentData: IVerifiedStudentData[] = [];
  public verifiedStudentCount!: number;

  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService
  ) {
    spinnerService.displaySpinner(true);
  }

  ngOnInit(): void {
    this.userService
      .verifyStudents()
      .subscribe((response: ITeacherVerifyStudentsResponse): void => {
        this.verifiedStudentCount = response?.count;
        this.VerifyStudentData = response?.data;
        this.spinnerService.displaySpinner(false);
      });
  }
}
