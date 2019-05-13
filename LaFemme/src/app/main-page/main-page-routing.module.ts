import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {SelectLanguageComponent} from './main-page/select-language/select-language.component';
import {SelectCountryComponent} from './main-page/select-country/select-country.component';

const routes: Routes = [
  {
    path: 'selectCountry', component: SelectCountryComponent
  },
  {
    path: 'selectLanguage', component: SelectLanguageComponent
  },
  {
    path: '', component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
