import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ITeacherViewExamResponse } from 'src/app/shared/interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewExamResolver
  implements Resolve<Observable<ITeacherViewExamResponse>>
{
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITeacherViewExamResponse> {
    return this.userService.viewExam();
  }
}
