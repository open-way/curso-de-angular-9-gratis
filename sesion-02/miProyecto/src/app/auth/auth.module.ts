import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';



@NgModule({
  declarations: [AuthComponent, LoginComponent, SignupComponent, RequestPasswordComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
  ]
})
export class AuthModule { }
