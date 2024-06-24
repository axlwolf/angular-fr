import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  public heroNames:string[] = ['Spiderman', 'Hulk', 'Ironman'];
  public deletedHero?: string;

  removeLastHero():void {

    this.deletedHero = this.heroNames.pop();

    console.log({deletedHero:this.deletedHero})
  }
}
