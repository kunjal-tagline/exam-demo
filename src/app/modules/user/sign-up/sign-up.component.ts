import { UserService } from './../../../services/user.service';
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
      value: 'teacher',
    },
    {
      id: 'Student',
      value: 'student',
    },
  ];

  public signUpForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: ['', Validators.pattern(emailRegEx)],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
        ]),
      ],
      role: ['', [Validators.required]],
    });
  }

  public signUpformSubmit(): void {
    var signUpData = this.signUpForm.value;

    this.userService.getSignUp(signUpData).subscribe({
      next: (signUpData) => console.log('signUpData :>> ', signUpData),
    });
  }
}
