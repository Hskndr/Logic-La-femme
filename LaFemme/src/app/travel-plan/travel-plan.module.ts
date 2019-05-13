import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelPlanRoutingModule } from './travel-plan-routing.module';
import { TravelPlanComponent } from './travel-plan/travel-plan.component';

@NgModule({
  declarations: [TravelPlanComponent],
  imports: [
    CommonModule,
    TravelPlanRoutingModule
  ]
})
export class TravelPlanModule { }
