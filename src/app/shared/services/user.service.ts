import { IForgotPasswordResponse } from 'src/app/shared/interfaces/login.interface';
import {
  deleteExam,
  IAllStudentDataResponse,
  ITeacherVerifyStudentsResponse,
  ITeacherViewExamDetails,
  ITeacherViewExamResponse,
  ITeacherViewProfileResponse,
} from 'src/app/shared/interfaces/teacher.interface';
import {
  IStudentExamListResponse,
  IStudentExamPaperResponse,
  IStudentProfileResponse,
} from 'src/app/shared/interfaces/student.interface';
import {
  ISignup,
  ISignUpResponse,
} from 'src/app/shared/interfaces/signup.interface';
import {
  ILogin,
  ILoginResponse,
} from 'src/app/shared/interfaces/login.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = environment.URL;

  constructor(private httpClient: HttpClient) {}

  public getSignUp(signUpData: ISignup): Observable<ISignUpResponse> {
    return this.httpClient.post<ISignUpResponse>(
      this.url + 'users/signUp',
      signUpData
    );
  }

  public getLogin(loginData: ILogin): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(
      this.url + 'users/Login',
      loginData
    );
  }

  public forgotPassword(email: object): Observable<IForgotPasswordResponse> {
    return this.httpClient.post<IForgotPasswordResponse>(
      this.url + 'users/ForgotPassword',
      email
    );
  }

  public getStudentsData(): Observable<IAllStudentDataResponse> {
    return this.httpClient.get<IAllStudentDataResponse>(
      this.url + 'dashboard/Teachers'
    );
  }

  public studentProfileById(
    id: number
  ): Observable<ITeacherViewProfileResponse> {
    return this.httpClient.get<ITeacherViewProfileResponse>(
      this.url + 'dashboard/Teachers/viewStudentDetail?' + 'id=' + id
    );
  }

  public viewExam(): Observable<ITeacherViewExamResponse> {
    return this.httpClient.get<ITeacherViewExamResponse>(
      this.url + 'dashboard/Teachers/viewExam'
    );
  }

  public viewExamsDetails(id: string): Observable<ITeacherViewExamDetails> {
    return this.httpClient.get<ITeacherViewExamDetails>(
      this.url + 'dashboard/Teachers/examDetail?id=' + id
    );
  }

  public verifyStudents(): Observable<ITeacherVerifyStudentsResponse> {
    return this.httpClient.get<ITeacherVerifyStudentsResponse>(
      this.url + 'dashboard/Teachers/StudentForExam'
    );
  }

  public deleteExams(id: string): Observable<deleteExam> {
    return this.httpClient.delete<deleteExam>(
      this.url + 'dashboard/Teachers/deleteExam?id=' + id
    );
  }

  public viewStudentProfile(): Observable<IStudentProfileResponse> {
    return this.httpClient.get<IStudentProfileResponse>(
      this.url + 'student/getStudentDetail'
    );
  }

  public studentExamList(): Observable<IStudentExamListResponse> {
    return this.httpClient.get<IStudentExamListResponse>(
      this.url + 'student/studentExam'
    );
  }

  public viewExamPaper(id: string): Observable<IStudentExamPaperResponse> {
    let examPaperUrl = this.url + 'student/examPaper?' + 'id=' + id;
    return this.httpClient.get<IStudentExamPaperResponse>(examPaperUrl);
  }

  public resetPassword(resetForm: any): Observable<any> {
    return this.httpClient.post<any>(
      this.url + 'users/ResetPassword',
      resetForm
    );
  }
}
