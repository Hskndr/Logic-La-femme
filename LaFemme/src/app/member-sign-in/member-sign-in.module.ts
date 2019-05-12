import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberSignInComponent } from './member-sign-in/member-sign-in.component';
import { MemberSignInRoutingModule} from './member-sign-in-routing.module';
import {FormsModule} from '@angular/forms';
import { SignInHeaderComponent } from './member-sign-in/sign-in-header/sign-in-header.component';
import { SignInFooterComponent } from './member-sign-in/sign-in-footer/sign-in-footer.component';

@NgModule({
  declarations: [MemberSignInComponent, SignInHeaderComponent, SignInFooterComponent],
  exports: [
    SignInHeaderComponent
  ],
  imports: [
    CommonModule,
    MemberSignInRoutingModule,
    FormsModule
  ]
})
export class MemberSignInModule { }
