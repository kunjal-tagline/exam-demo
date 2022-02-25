import { IForgotPasswordResponse } from './../interfaces/login.interface';
import {
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

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url: string = environment.URL;
  public token: string = localStorage.getItem('token') || '';
  public headers = new HttpHeaders().set('access-token', this.token);

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
      this.url + 'dashboard/Teachers/examDetail?' + 'id=' + id,
      { headers: this.headers }
    );
  }

  public verifyStudents(): Observable<ITeacherVerifyStudentsResponse> {
    return this.httpClient.get<ITeacherVerifyStudentsResponse>(
      this.url + 'dashboard/Teachers/StudentForExam',
      { headers: this.headers }
    );
  }

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

  public deleteExam(id: string): Observable<any> {
    return this.httpClient.put<any>(
      this.url + 'dashboard/Teachers/deleteExam?id=' + id,
      { headers: this.headers }
    );
  }

  // this code use later
  // public CreateExam(): Observable<any> {
  //   return this.httpClient.post<any>(this.url + 'dashboard/Teachers/Exam');
  // }

  // public editExam(id: number, body: string): Observable<any> {
  //   let editExamUrl = this.url + 'dashboard/Teachers/editExam?' + 'id=' + id;
  //   return this.httpClient.put<any>(editExamUrl, { headers: this.headers });
  // }
}
