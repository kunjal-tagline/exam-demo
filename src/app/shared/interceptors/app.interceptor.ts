import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from 'src/app/shared/services/spinner.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  public token: string = localStorage.getItem('token') || '';

  constructor(private spinnerService: SpinnerService) {}

  intercept(
    request: HttpRequest<object>,
    next: HttpHandler
  ): Observable<HttpEvent<object>> {
    if (!this.token) {
      this.token = localStorage.getItem('token') || '';
    }

    request = request.clone({
      headers: request.headers.set('access-token', this.token),
    });

    this.spinnerService.displaySpinner(true);

    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerService.displaySpinner(false)));
  }
}
