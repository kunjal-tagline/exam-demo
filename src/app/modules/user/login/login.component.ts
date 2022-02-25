import { SpinnerService } from './../../../shared/services/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginResponse } from 'src/app/shared/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private routes: Router,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.displaySpinner(false);
  }

  ngOnInit(): void {
    localStorage.clear();
  }

  public loginUserSubmit(): void {
    var loginData = this.loginForm.value;
    this.userService
      .getLogin(loginData)
      .subscribe((response: ILoginResponse) => {
        if (response.statusCode == 200) {
          this.toastrService.success(response.message, 'Success');
          if (response.data.role == 'student') {
            localStorage.setItem('studentName', response.data.name);
            localStorage.setItem('studentToken', response.data.token);
            this.routes.navigate(['/student/dashboard']);
          }
          if (response.data.role == 'teacher') {
            localStorage.setItem('teacherName', response.data.name);
            localStorage.setItem('teacherToken', response.data.token);
            this.routes.navigate(['/teacher/dashboard']);
          }
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }
}
