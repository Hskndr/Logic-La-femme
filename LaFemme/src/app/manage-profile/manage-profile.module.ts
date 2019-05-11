import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';

@NgModule({
  declarations: [ManageProfileComponent],
  imports: [
    CommonModule,
    ManageProfileRoutingModule
  ]
})
export class ManageProfileModule { }
