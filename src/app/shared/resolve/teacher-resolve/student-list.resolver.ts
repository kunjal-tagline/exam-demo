import { UserService } from '../../services/user.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IAllStudentDataResponse } from '../../interfaces/teacher.interface';

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
