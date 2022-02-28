import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../../shared/services/user.service';
import { SpinnerService } from './../../../shared/services/spinner.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IResetPasswordResponse } from 'src/app/shared/interfaces/reset-password.interface';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  public resetPasswordForm: FormGroup = new FormGroup({
    oldPassword: new FormControl(''),
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
  });

  constructor(
    private spinnerService: SpinnerService,
    private fb: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
    this.spinnerService.displaySpinner(false);
  }

  ngOnInit(): void {
    this.resetPasswordForm = this.fb.group({
      oldPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
      Password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
      ConfirmPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
    });
  }

  public resetSubmit() {
    var resetFormValue = this.resetPasswordForm.value;
    this.userService
      .resetPassword(resetFormValue)
      .subscribe((response: IResetPasswordResponse) => {
        if (response.statusCode === 200) {
          this.toastrService.success(response.message, 'Success');
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }
}
