import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreditPlanComponent} from './credit-plan/credit-plan.component';

const routes: Routes = [
  {
    path: '',
    component: CreditPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditPlanRoutingModule { }
