import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AffiliateSignInComponent} from './affiliate-sign-in/affiliate-sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: AffiliateSignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliateSignInRoutingModule { }
