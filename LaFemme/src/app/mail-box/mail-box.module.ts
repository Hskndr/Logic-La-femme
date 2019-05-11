import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailBoxRoutingModule } from './mail-box-routing.module';
import { MailBoxComponent } from './mail-box/mail-box.component';

@NgModule({
  declarations: [MailBoxComponent],
  imports: [
    CommonModule,
    MailBoxRoutingModule
  ]
})
export class MailBoxModule { }
