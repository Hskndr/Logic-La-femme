import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MemberSignInComponent} from './member-sign-in/member-sign-in.component';
import {MemberSignInRoutingModule} from './member-sign-in-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SignInHeaderComponent} from './member-sign-in/sign-in-header/sign-in-header.component';
import {SignInFooterComponent} from './member-sign-in/sign-in-footer/sign-in-footer.component';
import {TermConditionComponent} from './member-sign-in/term-condition/term-condition.component';
import {ViewComponent} from './member-sign-in/membercrud/view/view.component';
import {CreateComponent} from './member-sign-in/membercrud/create/create.component';
import {UpdateComponent} from './member-sign-in/membercrud/update/update.component';
import {ReadComponent} from './member-sign-in/membercrud/read/read.component';

@NgModule({
  declarations: [
    MemberSignInComponent,
    SignInHeaderComponent,
    SignInFooterComponent,
    TermConditionComponent,
    ViewComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent
  ],
  exports: [
    SignInHeaderComponent,
    TermConditionComponent,
    ViewComponent,
    CreateComponent,
    UpdateComponent,
    ReadComponent
  ],
  imports: [
    CommonModule,
    MemberSignInRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MemberSignInModule {
}
