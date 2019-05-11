import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TellUsMoreRoutingModule } from './tell-us-more-routing.module';
import { TellUsMoreComponent } from './tell-us-more/tell-us-more.component';

@NgModule({
  declarations: [TellUsMoreComponent],
  imports: [
    CommonModule,
    TellUsMoreRoutingModule
  ]
})
export class TellUsMoreModule { }
