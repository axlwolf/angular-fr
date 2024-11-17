import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  public menuItems: MenuItem[]= [
    {
      route: '/maps/fullscreen', name: "Full-Screen",
    },
    {
      route: '/maps/zoomrange', name: "Zoom-Range",
    },
    {
      route: '/maps/markers', name: "Markers",
    },
    {
      route: '/maps/properties', name: "Properties",
    }
  ];

}
