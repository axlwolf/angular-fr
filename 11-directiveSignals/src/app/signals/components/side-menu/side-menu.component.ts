import {Component, signal} from '@angular/core';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    {
      title: "Counter",
      route: 'counter',
    },
    {
      title: "Mutations",
      route: 'properties',
    },
    {
      title: 'User Info',
      route: 'user-info',
    }
  ]);
  // public menuItems: MenuItem[] = [
  //   {
  //     title: "Counter",
  //     route: 'counter',
  //   },
  //   {
  //     title: "Mutaciones",
  //     route: 'properties',
  //   },
  //   {
  //     title: 'User Info',
  //     route: 'user-info',
  //   }
  // ];

}
