import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
public studentName:any= localStorage.getItem('studentName');
  constructor() { }

  ngOnInit(): void {
  }

}
