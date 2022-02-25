import { SpinnerService } from './../../../shared/services/spinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public teacherName: String | null = localStorage.getItem('teacherName');

  constructor(private spinnerService: SpinnerService) {
    this.spinnerService.displaySpinner(false);
  }

  ngOnInit(): void {}
}
