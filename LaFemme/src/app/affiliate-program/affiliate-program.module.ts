import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliateProgramRoutingModule } from './affiliate-program-routing.module';
import { AffiliateProgramComponent } from './affiliate-program/affiliate-program.component';
import {AboutUsModule} from '../about-us/about-us.module';

@NgModule({
  declarations: [AffiliateProgramComponent],
  imports: [
    CommonModule,
    AffiliateProgramRoutingModule,
    AboutUsModule
  ]
})
export class AffiliateProgramModule { }
