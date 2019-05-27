import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// Http
import {HttpClientModule} from '@angular/common/http';

// Routing
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';

// services
import {MembersService} from './services/members.service';
import {MemberCrudService} from './services/member-crud.service';
// Forms
import {FormsModule} from '@angular/forms';
// Firebase
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
// ng Material and Bootstrap
import {MaterialModule} from './modules/material/material.module';
import {BootstrapModule} from './modules/bootstrap/bootstrap.module';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
// Delelte
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    AngularFirestoreModule,
    MaterialModule,
    BootstrapModule

  ],
  providers: [
    MembersService,
    MemberCrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
