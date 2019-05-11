import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MailBoxComponent} from './mail-box/mail-box.component';

const routes: Routes = [
  {
    path: '',
    component: MailBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailBoxRoutingModule { }
