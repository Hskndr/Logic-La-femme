import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MemberSignInComponent} from './member-sign-in/member-sign-in.component';

const routes: Routes = [
  {
    path: '', component: MemberSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberSignInRoutingModule { }


