import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';
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
    const loginData = this.loginForm.value;
    
    this.userService
      .getLogin(loginData)
      .subscribe((response: ILoginResponse) => {
        if (response.statusCode === 200) {
          this.toastrService.success(response.message, 'Success');
          localStorage.setItem('token', response.data.token);
          if (response.data.role == 'student') {
            localStorage.setItem('studentName', response.data.name);
            this.routes.navigate(['/student/dashboard']);
          }
          if (response.data.role == 'teacher') {
            localStorage.setItem('teacherName', response.data.name);
            this.routes.navigate(['/teacher/dashboard']);
          }
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }
}
