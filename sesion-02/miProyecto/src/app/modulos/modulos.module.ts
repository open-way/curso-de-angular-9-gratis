import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulosComponent } from './modulos.component';
import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';
import { ComponenteHijo2Component } from './componente-hijo2/componente-hijo2.component';


@NgModule({
  declarations: [
    ModulosComponent,
    ComponenteHijoComponent,
    ComponenteHijo2Component,
  ],
  exports: [
    ComponenteHijo2Component,
    ComponenteHijoComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class ModulosModule { }
