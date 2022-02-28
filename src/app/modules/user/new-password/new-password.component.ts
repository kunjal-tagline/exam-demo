import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss'],
})
export class NewPasswordComponent implements OnInit {
  public newPasswordForm: FormGroup = new FormGroup({
    Password: new FormControl(''),
    ConfirmPassword: new FormControl(''),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.newPasswordForm = this.fb.group({
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

  public newPasswordGenrate() {}
}
