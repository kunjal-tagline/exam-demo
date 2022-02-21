import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public teacherName: any = localStorage.getItem('teacherName');

  constructor() {}

  ngOnInit(): void {}
}
