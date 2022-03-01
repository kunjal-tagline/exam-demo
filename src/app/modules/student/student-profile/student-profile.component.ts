import { IStudentProfileResponse } from './../../../shared/interfaces/student.interface';
import { ActivatedRoute } from '@angular/router';
import { SpinnerService } from './../../../shared/services/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { IStudentProfileData } from 'src/app/shared/interfaces/student.interface';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentProfileData: IStudentProfileData[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.getstudentProfile();
  }

  public getstudentProfile() {
    this.spinnerService.displaySpinner(true);
    
    const viewStudentProfile: IStudentProfileResponse =
      this.activatedRoute.snapshot.data['viewStudentProfile'];

    if (viewStudentProfile.statusCode === 200) {
      this.toastrService.success(viewStudentProfile.message, 'Success');
      this.spinnerService.displaySpinner(false);
      this.studentProfileData = [viewStudentProfile?.data];
    } else {
      this.toastrService.error(viewStudentProfile.message, 'Failed');
    }
  }
}
