import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {AuthService} from './service/auth.service';
import {UserService} from './service/user.service';
import {AuthGuard} from './guard/auth.guard';



@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  // test
  providers: [AuthService, UserService, AuthGuard],
})
export class LoginModule { }
