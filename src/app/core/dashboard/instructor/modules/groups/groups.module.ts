import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupsRoutingModule } from './groups-routing.module';
import { GroupsComponent } from './components/groups/groups.component';
import { AddEditComponent } from './components/add-edit/add-edit.component';


@NgModule({
  declarations: [
    GroupsComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    GroupsRoutingModule
  ]
})
export class GroupsModule { }
