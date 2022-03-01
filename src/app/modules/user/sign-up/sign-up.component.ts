import { SpinnerService } from 'src/app/shared/services/spinner.service';
import {
  IRole,
  ISignUpResponse,
} from 'src/app/shared/interfaces/signup.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public roles: IRole[] = [
    {
      id: 'teacher',
      value: 'teacher',
    },
    {
      id: 'student',
      value: 'student',
    },
  ];

  public signUpForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    role: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private spinnerService: SpinnerService
  ) {
    this.spinnerService.displaySpinner(false);
  }

  ngOnInit(): void {
    const emailRegEx: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

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

    this.userService
      .getSignUp(signUpData)
      .subscribe((response: ISignUpResponse) => {
        if (response.statusCode == 200) {
          this.toastrService.success(response.message, 'Success');
        } else {
          this.toastrService.error(response.message, 'Failed');
        }
      });
  }
}
