import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
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
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.verifyStudentGet();
  }

  public verifyStudentGet(): void {
    const verifyStudent: ITeacherVerifyStudentsResponse =
      this.activatedRoute.snapshot.data['verifyStudent'];

    if (verifyStudent.statusCode === 200) {
      this.verifiedStudentCount = verifyStudent?.count;
      this.VerifyStudentData = verifyStudent?.data;
      this.toastrService.success(verifyStudent.message, 'Success');
    } else {
      this.toastrService.error(verifyStudent.message, 'Failed');
    }
  }
}
