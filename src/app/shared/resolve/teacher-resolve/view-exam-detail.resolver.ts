import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ITeacherViewExamDetails } from '../../interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewExamDetailResolver
  implements Resolve<Observable<ITeacherViewExamDetails>>
{
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITeacherViewExamDetails> {
    return this.userService.viewExamsDetails(route.params['examId']);
  }
}
