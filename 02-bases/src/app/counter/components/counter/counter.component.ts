import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h2>
  Counter: {{counter}}
</h2> 
<button (click)="increaseBy(2)"> +1 </button>
<button (click)="reset()">Reset</button>
<button (click)="decreaseBy(2)"> -1 </button>
  `,
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  public counter: number = 0;

  increaseBy(value: number):void {
    this.counter += value;
  }

  decreaseBy(value: number):void {
    this.counter -= value;
  }

  reset():void {
    this.counter = 0;
  }

}
