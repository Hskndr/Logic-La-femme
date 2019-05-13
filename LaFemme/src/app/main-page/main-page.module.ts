import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { SelectCountryComponent } from './main-page/select-country/select-country.component';
import { SelectLanguageComponent } from './main-page/select-language/select-language.component';

@NgModule({
  declarations: [MainPageComponent, SelectCountryComponent, SelectLanguageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
