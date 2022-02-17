import { Component, OnInit } from '@angular/core';
import { emailRegEx } from 'src/app/shared/shared';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public roles: Array<any> = [
    {
      id: 'Teacher',
      value: 'Teacher',
    },
    {
      id: 'Student',
      value: 'Student',
    },
  ];

  public signUpForm: FormGroup = new FormGroup({
    signUpName: new FormControl(''),
    signUpEmailId: new FormControl(''),
    signUpPassword: new FormControl(''),
    selectRole: new FormControl(''),
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      signUpName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      signUpEmailId: ['', Validators.pattern(emailRegEx)],
      signUpPassword: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
      selectRole: ['', [Validators.required]],
    });
  }

  public SignUpformSubmit():void {}
}
