import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostComentsComponent, ListaPostsComponent } from './components';

@NgModule({
  declarations: [
    PostsComponent,
    ListaPostsComponent,
    PostComentsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
  ],
  providers: [
  ]
})
export class PostsModule { }
