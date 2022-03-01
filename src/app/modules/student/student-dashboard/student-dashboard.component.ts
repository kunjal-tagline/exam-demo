import { SpinnerService } from './../../../shared/services/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss'],
})
export class StudentDashboardComponent implements OnInit {
  public studentName: string = localStorage.getItem('studentName') || '';

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerService.displaySpinner(false);
  }
}
