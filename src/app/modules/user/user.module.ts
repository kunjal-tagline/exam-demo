import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgotPasswordComponent, ResetPasswordComponent, NewPasswordComponent],
  imports: [CommonModule, UserRoutingModule,FormsModule,ReactiveFormsModule,CoreModule],
})
export class UserModule {}
