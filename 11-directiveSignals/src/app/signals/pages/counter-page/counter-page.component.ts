import {Component, computed, signal} from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss'
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter());

  constructor() {
  }

  increaseBy(value: number) {
    // this.counter.set(this.counter() + value);
    this.counter.update(current => current + value);
  }

  decreaseBy(value: number) {
    this.counter.update(current => current - value);
  }

}
