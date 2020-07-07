import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [MainPageComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class MainPageModule { }
