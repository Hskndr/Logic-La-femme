import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatingLafemmeRoutingModule } from './dating-lafemme-routing.module';
import { DatingLafemmeComponent } from './dating-lafemme/dating-lafemme.component';

@NgModule({
  declarations: [DatingLafemmeComponent],
  imports: [
    CommonModule,
    DatingLafemmeRoutingModule
  ]
})
export class DatingLafemmeModule { }
