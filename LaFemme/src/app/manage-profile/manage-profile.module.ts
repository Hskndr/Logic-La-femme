import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageProfileRoutingModule } from './manage-profile-routing.module';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { ManageProfileHeaderComponent } from './manage-profile/manage-profile-header/manage-profile-header.component';

@NgModule({
  declarations: [ManageProfileComponent, ManageProfileHeaderComponent],
  imports: [
    CommonModule,
    ManageProfileRoutingModule
  ]
})
export class ManageProfileModule { }
