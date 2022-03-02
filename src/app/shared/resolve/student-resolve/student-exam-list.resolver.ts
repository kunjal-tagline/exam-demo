import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IStudentExamListResponse } from 'src/app/shared/interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentExamListResolver
  implements Resolve<Observable<IStudentExamListResponse>>
{
  constructor(private userService: UserService) {}

  resolve(): Observable<IStudentExamListResponse> {
    return this.userService.studentExamList();
  }
}
