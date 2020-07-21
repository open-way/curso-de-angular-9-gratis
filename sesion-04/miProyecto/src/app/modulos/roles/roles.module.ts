import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';

import { FormRolNewComponent, ListRolesComponent } from './components';

import { MainComponent } from './containers/main/main.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RolesComponent,
    FormRolNewComponent,
    ListRolesComponent,
    MainComponent,
  ],
  imports: [
    SharedModule,
    RolesRoutingModule,
  ],
})
export class RolesModule { }
