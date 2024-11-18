import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {LngLat, Map} from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.scss'
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  @ViewChild("mapZoom") divMapZoom?: ElementRef;

  public zoom?: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-99.13835789614023, 19.434354514809343);

  ngAfterViewInit(): void {
    if (!this.divMapZoom) throw new Error("The html element was not found");

    this.map = new Map({
      container: this.divMapZoom?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners()
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  mapListeners(): void {
    if (!this.map) throw new Error("Map is not initialized");

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', () => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
    })
  }

  zoomIn(): void {
    this.map?.zoomIn();
  }

  zoomOut(): void {
    this.map?.zoomOut();
  }

  zoomChanged(value: string): void {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom)
  }
}
