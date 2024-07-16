import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPageComponent } from './pages/aboutPage/about-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

@NgModule({
  declarations: [
    // Components
    SidebarComponent,
    // Pages
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    // Pipes
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Components
    SidebarComponent,
    // Pages
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent
    // Pipes
  ]
})
export class SharedModule { }
