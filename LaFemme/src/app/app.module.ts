import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Http
import {HttpClientModule} from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    MembersService,
    MemberCrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
