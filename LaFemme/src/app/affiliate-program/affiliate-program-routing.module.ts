import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AffiliateProgramComponent} from './affiliate-program/affiliate-program.component';

const routes: Routes = [
  {
    path: '',
    component: AffiliateProgramComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffiliateProgramRoutingModule { }
