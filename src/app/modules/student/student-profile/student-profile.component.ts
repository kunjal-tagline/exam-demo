import { IStudentProfileResponse } from 'src/app/shared/interfaces/student.interface';
import { ActivatedRoute } from '@angular/router';
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
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.getstudentProfile();
  }

  public getstudentProfile(): void {
    const viewStudentProfile: IStudentProfileResponse =
      this.activatedRoute.snapshot.data['viewStudentProfile'];

    if (viewStudentProfile.statusCode === 200) {
      this.toastrService.success(viewStudentProfile.message, 'Success');
      this.studentProfileData = [viewStudentProfile?.data];
    } else {
      this.toastrService.error(viewStudentProfile.message, 'Failed');
    }
  }
}
