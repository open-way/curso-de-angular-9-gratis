import { PruevaComponent } from "./prueva/prueva.component";

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: 'prueva/:id',
        component: PruevaComponent,
      },
      {
        path: 'modulos',
        loadChildren: () => import('./modulos/modulos.module').then(res => res.ModulosModule),
        // loadChildren: 'modulos/modulos.module#ModulosModule',
      }
    ],
    // children: [],
    // loadChildren: [],
    // canActivate
  },
  // {
  //   path: 'auth',
  //   component: MainPageComponent,
  // },
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
