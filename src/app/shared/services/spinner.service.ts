import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor() {}

  public spinnerLoad$ = new BehaviorSubject<boolean>(true);

  public getSpinnerLoadObs() {
    return this.spinnerLoad$.asObservable();
  }

  public displaySpinner(value: boolean) {
    this.spinnerLoad$.next(value);
  }
}
