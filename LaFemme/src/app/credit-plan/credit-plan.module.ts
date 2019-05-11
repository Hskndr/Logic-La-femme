import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditPlanRoutingModule } from './credit-plan-routing.module';
import { CreditPlanComponent } from './credit-plan/credit-plan.component';

@NgModule({
  declarations: [CreditPlanComponent],
  imports: [
    CommonModule,
    CreditPlanRoutingModule
  ]
})
export class CreditPlanModule { }
