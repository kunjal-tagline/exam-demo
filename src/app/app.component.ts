import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'exam-demo';
  public isLoading!: boolean;

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {
    this.spinnerActivate();
  }

  public spinnerActivate(): void {
    this.spinnerService
      .getSpinnerLoadObs()
      .subscribe((value: boolean): void => {
        this.isLoading = value;
      });
  }
}
