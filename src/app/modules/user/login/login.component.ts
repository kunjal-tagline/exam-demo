import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  public loginUserSubmit(): void {
    var loginData = this.loginForm.value;
    this.userService.getLogin(loginData).subscribe((response: any) => {
      console.log('response :>> ', response);
      console.log('loginData :>> ', loginData);
      if (response.statusCode == 200) {
        this.toastrService.success(response.message, 'Success');
        if (response.data.role == 'student') {
          localStorage.setItem('studentToken', response.data.token);
        }
        if (response.data.role == 'teacher') {
          localStorage.setItem('teacherToken', response.data.token);
        }
      }
      if (response.statusCode == 500) {
        this.toastrService.error(response.message, 'Failed');
      }
    });
  }
}
