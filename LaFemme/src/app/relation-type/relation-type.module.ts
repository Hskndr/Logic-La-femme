import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationTypeRoutingModule } from './relation-type-routing.module';
import { RelationTypeComponent } from './relation-type/relation-type.component';
import {MemberSignInModule} from "../member-sign-in/member-sign-in.module";

@NgModule({
  declarations: [RelationTypeComponent],
  imports: [
    CommonModule,
    RelationTypeRoutingModule,
    MemberSignInModule
  ]
})
export class RelationTypeModule { }
