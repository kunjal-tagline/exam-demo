import { IForgotPasswordResponse } from './../interfaces/login.interface';
import {
  deleteExam,
  IAllStudentDataResponse,
  ITeacherVerifyStudentsResponse,
  ITeacherViewExamDetails,
  ITeacherViewExamResponse,
  ITeacherViewProfileResponse,
} from './../interfaces/teacher.interface';
import {
  IStudentExamListResponse,
  IStudentExamPaperResponse,
  IStudentProfileResponse,
} from '../interfaces/student.interface';
import { ISignup, ISignUpResponse } from './../interfaces/signup.interface';
import { ILogin, ILoginResponse } from '../interfaces/login.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { IResetPasswordResponse } from '../interfaces/reset-password.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = environment.URL;
  public token: string = localStorage.getItem('token') || '';
  public headers = new HttpHeaders().set('access-token', this.token);

  constructor(private httpClient: HttpClient) {}
  //user sign up start
  public getSignUp(signUpData: ISignup): Observable<ISignUpResponse> {
    return this.httpClient.post<ISignUpResponse>(
      this.url + 'users/signUp',
      signUpData
    );
  }
  //user sign up end

  //user login start
  public getLogin(loginData: ILogin): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(
      this.url + 'users/Login',
      loginData
    );
  }
  //user login end

  //forgot password start
  public forgotPassword(email: object): Observable<IForgotPasswordResponse> {
    return this.httpClient.post<IForgotPasswordResponse>(
      this.url + 'users/ForgotPassword',
      email
    );
  }

  public newPasswordTokenCheck(): Observable<IResetPasswordResponse> {
    return this.httpClient.get<IResetPasswordResponse>(
      this.url + 'users/newPassword',
      {
        headers: this.headers,
      }
    );
  }

  public newPassword(newPasswordForm: any): Observable<any> {
    return this.httpClient.post<any>(
      this.url + 'users/ForgotPassword/Verify',
      newPasswordForm,
      {
        headers: this.headers,
      }
    );
  }
  //forgot password end

  //teachers access start
  public getStudentsData(): Observable<IAllStudentDataResponse> {
    return this.httpClient.get<IAllStudentDataResponse>(
      this.url + 'dashboard/Teachers',
      { headers: this.headers }
    );
  }

  public studentProfileById(
    id: number
  ): Observable<ITeacherViewProfileResponse> {
    return this.httpClient.get<ITeacherViewProfileResponse>(
      this.url + 'dashboard/Teachers/viewStudentDetail?' + 'id=' + id,
      { headers: this.headers }
    );
  }

  public viewExam(): Observable<ITeacherViewExamResponse> {
    return this.httpClient.get<ITeacherViewExamResponse>(
      this.url + 'dashboard/Teachers/viewExam',
      { headers: this.headers }
    );
  }

  public viewExamsDetails(id: string): Observable<ITeacherViewExamDetails> {
    return this.httpClient.get<ITeacherViewExamDetails>(
      this.url + 'dashboard/Teachers/examDetail?id=' + id,
      { headers: this.headers }
    );
  }

  public verifyStudents(): Observable<ITeacherVerifyStudentsResponse> {
    return this.httpClient.get<ITeacherVerifyStudentsResponse>(
      this.url + 'dashboard/Teachers/StudentForExam',
      { headers: this.headers }
    );
  }

  public deleteExams(id: string): Observable<deleteExam> {
    return this.httpClient.delete<deleteExam>(
      this.url + 'dashboard/Teachers/deleteExam?id=' + id,
      { headers: this.headers }
    );
  }
  //teachers end

  //student access start
  public viewStudentProfile(): Observable<IStudentProfileResponse> {
    return this.httpClient.get<IStudentProfileResponse>(
      this.url + 'student/getStudentDetail',
      { headers: this.headers }
    );
  }

  public studentExamList(): Observable<IStudentExamListResponse> {
    return this.httpClient.get<IStudentExamListResponse>(
      this.url + 'student/studentExam',
      { headers: this.headers }
    );
  }

  public viewExamPaper(id: string): Observable<IStudentExamPaperResponse> {
    let examPaperUrl = this.url + 'student/examPaper?' + 'id=' + id;
    return this.httpClient.get<IStudentExamPaperResponse>(examPaperUrl, {
      headers: this.headers,
    });
  }
  //student access end

  //reset password start
  public resetPassword(resetForm: any): Observable<any> {
    return this.httpClient.post<any>(
      this.url + 'users/ResetPassword',
      resetForm,
      { headers: this.headers }
    );
  }
  //reset password end

  // this code use later
  // public CreateExam(): Observable<any> {
  //   return this.httpClient.post<any>(this.url + 'dashboard/Teachers/Exam');
  // }

  // public editExam(id: number, body: string): Observable<any> {
  //   let editExamUrl = this.url + 'dashboard/Teachers/editExam?' + 'id=' + id;
  //   return this.httpClient.put<any>(editExamUrl, { headers: this.headers });
  // }
}
