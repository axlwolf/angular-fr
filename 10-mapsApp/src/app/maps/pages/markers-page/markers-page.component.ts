import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
import {LngLat, Map, Marker} from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.scss'
})
export class MarkersPageComponent implements AfterViewInit {
  public markers: MarkerAndColor[] = [];

  @ViewChild("mapZoom") divMapZoom?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-99.13835789614023, 19.434354514809343);

  ngAfterViewInit(): void {
    if (!this.divMapZoom) throw new Error("The html element was not found");

    this.map = new Map({
      container: this.divMapZoom?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom
    });

    this.readFromLocalStorage();

    // const markerHTML = document.createElement("div");
    // markerHTML.innerHTML = ` <h1>Axel Lanuza </h1> `;
    //
    // const marker = new Marker({
    //   color: 'tomato',
    //   element: markerHTML
    // })
    //   .setLngLat(this.currentLngLat)
    //   .addTo(this.map!);

  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter();
    this.addMarker(lngLat, color)
  }

  addMarker(lngLat: LngLat, color: string = 'tomato') {
    if (!this.map) return;
    this.currentLngLat = lngLat;
    const marker = new Marker({
      color: color,
      draggable: true,
    }).setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({
      color,
      marker,
    });

    this.saveToLocalStorage();

    marker.on('dragend', () => this.saveToLocalStorage())
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
    this.saveToLocalStorage();
  }

  flyTo(marker: Marker) {
    if (!this.map) return;

    this.map.flyTo({
      zoom: 14,
      center: marker.getLngLat()
    })
  }

  saveToLocalStorage() {
    //console.log("saveToLocalStorage");
    const plainMarkers: PlainMarker[] = this.markers.map(({color, marker}) => ({
      color,
      lngLat: marker.getLngLat().toArray()
    }));
    //console.log({plainMarkers});

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString); //!Check!
    //console.log({plainMarkers});
    plainMarkers.forEach(({color, lngLat}: PlainMarker) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color);
    })
  }
}
