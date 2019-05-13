import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberSignInComponent} from './member-sign-in/member-sign-in.component';
import {TermConditionComponent} from './member-sign-in/term-condition/term-condition.component';

const routes: Routes = [
  {
    path: 'termCondition', component: TermConditionComponent
  },
  {
    path: '', component: MemberSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberSignInRoutingModule {
}


