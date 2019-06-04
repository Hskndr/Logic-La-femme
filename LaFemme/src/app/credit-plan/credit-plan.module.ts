import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditPlanRoutingModule } from './credit-plan-routing.module';
import { CreditPlanComponent } from './credit-plan/credit-plan.component';
import { CreditPlanHeaderComponent } from './credit-plan/credit-plan-header/credit-plan-header.component';

@NgModule({
  declarations: [CreditPlanComponent, CreditPlanHeaderComponent],
  imports: [
    CommonModule,
    CreditPlanRoutingModule
  ]
})
export class CreditPlanModule { }
