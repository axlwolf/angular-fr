import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutPageComponent } from './pages/aboutPage/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { LoaderSpinnerComponent } from './components/loader-spinner/loader-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    // Components
    SidebarComponent,
    // Pages
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchBoxComponent,
    LoaderSpinnerComponent,
    // Pipes
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Components
    SidebarComponent,
    SearchBoxComponent,
    LoaderSpinnerComponent,
    // Pages
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent
    // Pipes
  ]
})
export class SharedModule { }
