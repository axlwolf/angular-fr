import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3838294030.
  public name: string = 'ironman';
  public age: number = 45;
  public showSection: boolean = true;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetData(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
