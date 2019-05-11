import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliateSignInRoutingModule } from './affiliate-sign-in-routing.module';
import { AffiliateSignInComponent } from './affiliate-sign-in/affiliate-sign-in.component';

@NgModule({
  declarations: [AffiliateSignInComponent],
  imports: [
    CommonModule,
    AffiliateSignInRoutingModule
  ]
})
export class AffiliateSignInModule { }
