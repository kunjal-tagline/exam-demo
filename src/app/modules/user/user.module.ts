import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from 'src/app/modules/user/user-routing.module';
import { LoginComponent } from 'src/app/modules/user/login/login.component';
import { SignUpComponent } from 'src/app/modules/user/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from 'src/app/modules/user/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'src/app/modules/user/reset-password/reset-password.component';
import { NewPasswordComponent } from 'src/app/modules/user/new-password/new-password.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
})
export class UserModule {}
