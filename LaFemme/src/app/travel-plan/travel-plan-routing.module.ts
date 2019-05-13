import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TravelPlanComponent} from './travel-plan/travel-plan.component';

const routes: Routes = [
  {
    path: '',
    component: TravelPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelPlanRoutingModule { }
