import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
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
    },
    {
      route: '/alone', name: "Alone",
    }
  ];

}
