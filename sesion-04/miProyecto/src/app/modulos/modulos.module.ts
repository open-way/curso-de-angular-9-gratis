import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosComponent } from './modulos.component';
import { ModulosRoutingModule } from './modulos-routing.module';


@NgModule({
  declarations: [
    ModulosComponent,
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    ModulosRoutingModule
  ],
})
export class ModulosModule { }
