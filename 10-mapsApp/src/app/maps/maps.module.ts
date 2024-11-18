import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = "pk.eyJ1Ijoia2lua3lzcXVhZCIsImEiOiJjbTNtMGx1NzIwYmtpMnZwbDRweHd2dTBjIn0._GovhjgLg9rhJy3B3LF2mQ"

import {MiniMapComponent} from './components/mini-map/mini-map.component';
import {MapsLayoutComponent} from './layout/maps-layout/maps-layout.component';
import {FullScreenPageComponent} from './pages/full-screen-page/full-screen-page.component';
import {MarkersPageComponent} from './pages/markers-page/markers-page.component';
import {PropertiesPageComponent} from './pages/properties-page/properties-page.component';
import {ZoomRangePageComponent} from './pages/zoom-range-page/zoom-range-page.component';
import {RouterOutlet} from "@angular/router";
import {MapsRoutingModule} from "./maps-routing.module";

/* Standalone counter*/
import {CounterAloneComponent} from "../alone/components/counter-alone/counter-alone.component";
import {SideMenuComponent} from '../alone/components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    MiniMapComponent,
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
    CounterAloneComponent,
    SideMenuComponent
  ]
})
export class MapsModule {
}
