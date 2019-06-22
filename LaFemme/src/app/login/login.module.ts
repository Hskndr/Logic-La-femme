import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AuthService} from './service/auth.service';
import {UserService} from './service/user.service';
import {AuthGuard} from './guard/auth.guard';
import { LogoutComponent } from './logout/logout.component';



@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminComponent
  ],
  // test
  providers: [AuthService, UserService, AuthGuard],
})
export class LoginModule { }
