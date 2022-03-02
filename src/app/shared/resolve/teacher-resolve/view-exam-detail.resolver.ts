import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ITeacherViewExamDetails } from 'src/app/shared/interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class ViewExamDetailResolver
  implements Resolve<Observable<ITeacherViewExamDetails>>
{
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ITeacherViewExamDetails> {
    return this.userService.viewExamsDetails(route.params['examId']);
  }
}
