import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatingLafemmeRoutingModule } from './dating-lafemme-routing.module';
import { DatingLafemmeComponent } from './dating-lafemme/dating-lafemme.component';
import {AboutUsModule} from '../about-us/about-us.module';

@NgModule({
  declarations: [DatingLafemmeComponent],
  imports: [
    CommonModule,
    DatingLafemmeRoutingModule,
    AboutUsModule
  ]
})
export class DatingLafemmeModule { }
