import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffiliateProgramRoutingModule } from './affiliate-program-routing.module';
import { AffiliateProgramComponent } from './affiliate-program/affiliate-program.component';

@NgModule({
  declarations: [AffiliateProgramComponent],
  imports: [
    CommonModule,
    AffiliateProgramRoutingModule
  ]
})
export class AffiliateProgramModule { }
