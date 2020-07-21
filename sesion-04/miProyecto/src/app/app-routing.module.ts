import { PruevaComponent } from "./prueva/prueva.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';


const routes: Routes = [
  // RUTAS PRIVADAS
  {
    path: '',
    component: MainPageComponent,
    loadChildren: () => import('./modulos/modulos.module').then(res => res.ModulosModule),
    canActivate: [],
  },
  // RUTAS PÚBLICAS
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(res => res.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
