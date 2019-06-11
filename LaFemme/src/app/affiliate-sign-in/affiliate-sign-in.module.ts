import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliateSignInRoutingModule } from './affiliate-sign-in-routing.module';
import { AffiliateSignInComponent } from './affiliate-sign-in/affiliate-sign-in.component';
import { AffilitateSignInHeaderComponent } from './affiliate-sign-in/affilitate-sign-in-header/affilitate-sign-in-header.component';
import { AffiliateTermsComponent } from './affiliate-terms/affiliate-terms.component';

@NgModule({
  declarations: [AffiliateSignInComponent, AffilitateSignInHeaderComponent, AffiliateTermsComponent],
  imports: [
    CommonModule,
    AffiliateSignInRoutingModule
  ]
})
export class AffiliateSignInModule { }
