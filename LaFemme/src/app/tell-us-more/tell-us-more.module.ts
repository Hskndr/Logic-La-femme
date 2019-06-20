import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TellUsMoreRoutingModule } from './tell-us-more-routing.module';
import { TellUsMoreComponent } from './tell-us-more/tell-us-more.component';
import {MemberSignInModule} from '../member-sign-in/member-sign-in.module';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [TellUsMoreComponent],
  imports: [
    CommonModule,
    TellUsMoreRoutingModule,
    MemberSignInModule,
    ReactiveFormsModule
  ]
})
export class TellUsMoreModule { }
