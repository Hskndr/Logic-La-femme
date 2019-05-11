import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TellUsMoreComponent} from './tell-us-more/tell-us-more.component';

const routes: Routes = [
  {
    path: '',
    component: TellUsMoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TellUsMoreRoutingModule { }
