import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Map } from 'mapbox-gl';


@Component({
  templateUrl: './full-screen-page.component.html',
  styleUrl: './full-screen-page.component.scss'
})
export class FullScreenPageComponent implements AfterViewInit {

  @ViewChild("map") divMap?: ElementRef;

  ngAfterViewInit(): void {
    if(!this.divMap) throw new Error("The html element was not found");

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }

}
