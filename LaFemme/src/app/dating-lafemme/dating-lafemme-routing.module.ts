import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DatingLafemmeComponent} from './dating-lafemme/dating-lafemme.component';

const routes: Routes = [
  {
    path: '',
    component: DatingLafemmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DatingLafemmeRoutingModule { }
