import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailBoxRoutingModule } from './mail-box-routing.module';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MailBoxHeaderComponent } from './mail-box/mail-box-header/mail-box-header.component';
import { MailBoxNavbarComponent } from './mail-box/mail-box-navbar/mail-box-navbar.component';
import { MailBoxLateralnavComponent } from './mail-box/mail-box-lateralnav/mail-box-lateralnav.component';
import { MailBoxMessageComponent } from './mail-box/mail-box-message/mail-box-message.component';

@NgModule({
  declarations: [MailBoxComponent, MailBoxHeaderComponent, MailBoxNavbarComponent, MailBoxLateralnavComponent, MailBoxMessageComponent],
  imports: [
    CommonModule,
    MailBoxRoutingModule
  ]
})
export class MailBoxModule { }
