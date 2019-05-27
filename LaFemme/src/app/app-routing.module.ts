import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NotFoundComponent} from './home/not-found/not-found.component';
// Delete
import {TermsAndConditionsComponent} from './components/terms-and-conditions/terms-and-conditions.component';
import {ViewComponent} from './member-sign-in/member-sign-in/membercrud/view/view.component';

const routes: Routes = [
  {
    path: 'termAndCondition',
    component: TermsAndConditionsComponent
  },
  {
    path: 'travelPlan',
    loadChildren: './travel-plan/travel-plan.module#TravelPlanModule'
  },
  {
    path: 'tellUsMore',
    loadChildren: './tell-us-more/tell-us-more.module#TellUsMoreModule'
  },
  {
    path: 'relationType',
    loadChildren: './relation-type/relation-type.module#RelationTypeModule'
  },
  {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule'
  },
  {
    path: 'manageProfile',
    loadChildren: './manage-profile/manage-profile.module#ManageProfileModule'
  },
  {
    path: 'mailBox',
    loadChildren: './mail-box/mail-box.module#MailBoxModule'
  },
  {
    path: 'datingLafemme',
    loadChildren: './dating-lafemme/dating-lafemme.module#DatingLafemmeModule'
  },
  {
    path: 'creditPlan',
    loadChildren: './credit-plan/credit-plan.module#CreditPlanModule'
  },
  {
    path: 'affiliateSignIn',
    loadChildren: './affiliate-sign-in/affiliate-sign-in.module#AffiliateSignInModule'
  },
  {
    path: 'affiliateProgram',
    loadChildren: './affiliate-program/affiliate-program.module#AffiliateProgramModule'
  },
  {
    path: 'aboutUs',
    loadChildren: './about-us/about-us.module#AboutUsModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: 'memberSignIn',
    loadChildren: './member-sign-in/member-sign-in.module#MemberSignInModule'
  },
  {
    path: '',
    loadChildren: './main-page/main-page.module#MainPageModule'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**', redirectTo: 'not-found', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
