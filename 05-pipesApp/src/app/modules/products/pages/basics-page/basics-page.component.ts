import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.scss'
})
export class BasicsPageComponent {

  public nameLower: string = 'Axel';
  public nameUpper: string = 'AXEL';
  public fullName: string = 'AxEl LaNuZa';

  public customDate: Date = new Date();
  
}
