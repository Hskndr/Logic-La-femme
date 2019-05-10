import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberSignInComponent } from './member-sign-in/member-sign-in.component';
import { MemberSignInRoutingModule} from './member-sign-in-routing.module';

@NgModule({
  declarations: [MemberSignInComponent],
  imports: [
    CommonModule,
    MemberSignInRoutingModule
  ]
})
export class MemberSignInModule { }
