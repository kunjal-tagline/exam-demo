import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
}
