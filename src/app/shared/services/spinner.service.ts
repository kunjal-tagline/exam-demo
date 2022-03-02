import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  constructor() {}

  public spinnerLoad$:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public getSpinnerLoadObs(): Observable<boolean> {
    return this.spinnerLoad$.asObservable();
  }

  public displaySpinner(value: boolean):void {
    this.spinnerLoad$.next(value);
  }
}
