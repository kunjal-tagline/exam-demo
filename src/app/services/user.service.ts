import { Login} from './../interfaces/login.interface';
import { Signup } from './../interfaces/signup.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = environment.URL;
  public token: any = localStorage.getItem('teacherToken');
  constructor(private httpClient: HttpClient) {}

  public getSignUp(signUpData: Signup): Observable<Signup> {
    return this.httpClient.post<Signup>(this.url + 'users/signUp', signUpData);
  }

  public getLogin(loginData: Login): Observable<Login> {
    return this.httpClient.post<Login>(this.url + 'users/Login', loginData);
  }

  public getStudentsData(): Observable<any> {
   //console.log('this.token :>> ', this.token);
    const headers = new HttpHeaders().set('access-token', this.token);
    return this.httpClient.get<any>(this.url + 'dashboard/Teachers', {
      headers: headers,
    });
  }
}
