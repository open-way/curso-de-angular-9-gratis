import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModulosModule } from './modulos/modulos.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PruevaComponent } from './prueva/prueva.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PruevaComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,

    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
