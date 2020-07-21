import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { MainUsuariosComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuariosComponent, MainUsuariosComponent],
  imports: [
    CommonModule,
    // FormsModule,
    ReactiveFormsModule,
    UsuariosRoutingModule,
  ],
})
export class UsuariosModule { }
