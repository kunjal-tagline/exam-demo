import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss'],
})
export class StudentProfileComponent implements OnInit {
  public studentProfileData: any[] = [];
  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.userService.viewStudentProfile().subscribe((response: any) => {
      //console.log('response :>> ', response);
      if (response.statusCode === 200) {
        this.toastrService.success(response.message, 'Sucess');
        this.studentProfileData = [response.data];
        //console.log('this.studentProfileData :>> ', this.studentProfileData);
      }
    });
  }
}
