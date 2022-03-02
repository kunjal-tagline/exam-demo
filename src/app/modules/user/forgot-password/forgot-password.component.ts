import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/services/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IForgotPasswordResponse } from 'src/app/shared/interfaces/login.interface';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('forgotPasswordForm') forgotPasswordForm!: NgForm;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {}

  public sendMail(): void {
    const enteredEmail: object = { email: this.forgotPasswordForm.value.email };

    this.userService
      .forgotPassword(enteredEmail)
      .subscribe((response: IForgotPasswordResponse) => {
        if (response.statusCode === 200) {
          this.toastrService.success(response.message, 'Success');
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }
}
