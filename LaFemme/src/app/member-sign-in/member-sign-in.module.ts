import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberSignInComponent } from './member-sign-in/member-sign-in.component';
import { MemberSignInRoutingModule} from './member-sign-in-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [MemberSignInComponent],
  imports: [
    CommonModule,
    MemberSignInRoutingModule,
    FormsModule
  ]
})
export class MemberSignInModule { }
