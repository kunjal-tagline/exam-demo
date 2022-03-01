import { ITeacherVerifyStudentsResponse } from 'src/app/shared/interfaces/teacher.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VerifyStudentResolver
  implements Resolve<Observable<ITeacherVerifyStudentsResponse>>
{
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITeacherVerifyStudentsResponse> {
    return this.userService.verifyStudents();
  }
}
