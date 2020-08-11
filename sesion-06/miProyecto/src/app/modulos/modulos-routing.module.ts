import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulosComponent } from './modulos.component';


const routes: Routes = [
  {
    path: '',
    component: ModulosComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'roles',
        loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule),
      },
      {
        path: 'usuarios',
        loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
      },
      {
        path: 'posts',
        loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ModulosRoutingModule { }
