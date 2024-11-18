import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1Ijoia2lua3lzcXVhZCIsImEiOiJjbTNtMGx1NzIwYmtpMnZwbDRweHd2dTBjIn0._GovhjgLg9rhJy3B3LF2mQ"

import {MiniMapComponent} from './components/mini-map/mini-map.component';
import {SideMenuComponent} from './components/side-menu/side-menu.component';
import {MapsLayoutComponent} from './layout/maps-layout/maps-layout.component';
import {FullScreenPageComponent} from './pages/full-screen-page/full-screen-page.component';
import {MarkersPageComponent} from './pages/markers-page/markers-page.component';
import {PropertiesPageComponent} from './pages/properties-page/properties-page.component';
import {ZoomRangePageComponent} from './pages/zoom-range-page/zoom-range-page.component';
import {RouterOutlet} from "@angular/router";
import {MapsRoutingModule} from "./maps-routing.module";
import {CounterAloneComponent} from "../alone/components/counter-alone/counter-alone.component";

/* Standalo counter*/

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    MapsRoutingModule,
    CounterAloneComponent
  ]
})
export class MapsModule {
}
