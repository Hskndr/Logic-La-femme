import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {AboutUsModule} from "../about-us/about-us.module";
import { ProfileHeaderComponent } from './profile/profile-header/profile-header.component';

@NgModule({
  declarations: [ProfileComponent, ProfileHeaderComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    AboutUsModule
  ]
})
export class ProfileModule { }
