import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelationTypeRoutingModule } from './relation-type-routing.module';
import { RelationTypeComponent } from './relation-type/relation-type.component';

@NgModule({
  declarations: [RelationTypeComponent],
  imports: [
    CommonModule,
    RelationTypeRoutingModule
  ]
})
export class RelationTypeModule { }
