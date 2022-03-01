import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IAllStudentDataResponse } from 'src/app/shared/interfaces/teacher.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentListResolver
  implements Resolve<Observable<IAllStudentDataResponse>>
{
  constructor(private userService: UserService) {}

  resolve(): Observable<IAllStudentDataResponse> {
    return this.userService.getStudentsData();
  }
}
