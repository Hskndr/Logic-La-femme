import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutUsHeaderComponent } from './about-us/about-us-header/about-us-header.component';
import { AboutUsFooterComponent } from './about-us/about-us-footer/about-us-footer.component';
import { AboutUsNavbarComponent } from './about-us/about-us-navbar/about-us-navbar.component';

@NgModule({
  declarations: [AboutUsComponent, AboutUsHeaderComponent, AboutUsFooterComponent, AboutUsNavbarComponent],
  exports: [
    AboutUsHeaderComponent,
    AboutUsFooterComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
  ]
})
export class AboutUsModule { }
