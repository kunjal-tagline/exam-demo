import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IStudentProfileResponse } from 'src/app/shared/interfaces/student.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentProfileResolver
  implements Resolve<Observable<IStudentProfileResponse>>
{
  constructor(private userService: UserService) {}

  resolve(): Observable<IStudentProfileResponse> {
    return this.userService.viewStudentProfile();
  }
}
