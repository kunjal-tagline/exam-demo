import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IStudentProfileResponse } from '../../interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentProfileResolver
  implements Resolve<Observable<IStudentProfileResponse>>
{
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IStudentProfileResponse> {
    return this.userService.viewStudentProfile();
  }
}
