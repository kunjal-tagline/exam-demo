import { UserService } from './../../services/user.service';
import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IStudentExamPaperResponse } from '../../interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewExamPaperResolver
  implements Resolve<Observable<IStudentExamPaperResponse>>
{
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IStudentExamPaperResponse> {
    return this.userService.viewExamPaper(route.params['id']);
  }
}
