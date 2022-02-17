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

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  public loginUserSubmit(): void {
    var loginData = this.loginForm.value;
    this.userService.getLogin(loginData).subscribe({
      next: (loginData) => console.log('loginData :>> ', loginData),
    });
  }
}
